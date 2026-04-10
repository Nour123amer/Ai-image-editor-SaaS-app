import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { Polar } from "@polar-sh/sdk";
import {
    polar,
    checkout,
    portal,
    usage,
    webhooks,
} from "@polar-sh/better-auth";
import { prisma } from "~/lib/prisma";

console.log("POLAR KEY:", process.env.POLAR_API_KEY);
console.log("NODE ENV:", process.env.NODE_ENV);

const polarClient = new Polar({
    accessToken: process.env.NODE_ENV === "production" ? process.env.POLAR_API_KEY
        : process.env.POLAR_API_KEY_LOCAL!,
    // Use 'sandbox' if you're using the Polar Sandbox environment
    // Remember that access tokens, products, etc. are completely separated between environments.
    // Access tokens obtained in Production are for instance not usable in the Sandbox environment.
    server: process.env.NODE_ENV === "production" ? 'production' : 'sandbox'
});

export const auth = betterAuth({

    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [
        polar({
            client: polarClient,
            createCustomerOnSignUp: true,
            use: [
                checkout({
                    products: [
                        {
                            productId: "5d5772f0-fe96-42ff-8d9d-2bff6f1e7ffa", // ID of Product from Polar Dashboard
                            slug: "100-credits" // Custom slug for easy reference in Checkout URL, e.g. /checkout/pro
                        },
                        {
                            productId: "9f616e5c-8a36-448c-801a-c82a6ee07426", // ID of Product from Polar Dashboard
                            slug: "200-credits" // Custom slug for easy reference in Checkout URL, e.g. /checkout/pro
                        },
                        {
                            productId: "bf914353-33dc-41fe-9b6b-6f10c7a6687a", // ID of Product from Polar Dashboard
                            slug: "50-credits" // Custom slug for easy reference in Checkout URL, e.g. /checkout/pro
                        }
                    ],
                    successUrl: "/success?checkout_id={CHECKOUT_ID}",
                    authenticatedUsersOnly: true
                }),
                portal(),
                usage(),
                webhooks({
                    secret: process.env.POLAR_WEBHOOK_SECRET ?? "",
                    onOrderPaid: async (order) => {
                        const externalCustomerId = order.data.customer.id;

                        if (!externalCustomerId) {
                            console.log("no external customer id found")
                            throw new Error("no external customer id found")
                        }

                        const productId = order.data.productId;
                        let creditsToAdd = 0;
                        console.log("Webhook order:", order.data);
                        console.log("Credits to add:", creditsToAdd);

                        switch (productId) {
                            case "a8ff4fa7-4d11-414d-a498-69eeaa5b1b74":
                                creditsToAdd = 50;
                                break;

                            case "e70fef4c-942a-4098-8d26-f31b3307f0ed":
                                creditsToAdd = 100;
                                break;

                            case "dca88f28-596a-4e22-89b6-1b0f6d0f9fc5":
                                creditsToAdd = 200;
                                break;
                        }

                        await prisma.user.update({
                            where: { id: externalCustomerId },
                            data: {
                                credits: {
                                    increment: creditsToAdd,
                                }
                            }
                        })

                    }
                })
            ],
        })
    ],
     session: {
    expiresIn:7*60*60*24,// 1 day
  },
});
