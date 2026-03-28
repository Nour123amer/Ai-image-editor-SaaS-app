import { PrismaClient } from "@prisma/client";
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
import { db } from "~/server/db";
import { prisma } from "~/lib/prisma";


// const prisma= new PrismaClient();


const polarClient = new Polar({
    accessToken: process.env.POLAR_ACCESS_TOKEN,
    // Use 'sandbox' if you're using the Polar Sandbox environment
    // Remember that access tokens, products, etc. are completely separated between environments.
    // Access tokens obtained in Production are for instance not usable in the Sandbox environment.
    server: 'sandbox'
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
                            productId: "e70fef4c-942a-4098-8d26-f31b3307f0ed", // ID of Product from Polar Dashboard
                            slug: "100-credits" // Custom slug for easy reference in Checkout URL, e.g. /checkout/pro
                        },
                        {
                            productId: "dca88f28-596a-4e22-89b6-1b0f6d0f9fc5", // ID of Product from Polar Dashboard
                            slug: "200-credits" // Custom slug for easy reference in Checkout URL, e.g. /checkout/pro
                        },
                        {
                            productId: "a8ff4fa7-4d11-414d-a498-69eeaa5b1b74", // ID of Product from Polar Dashboard
                            slug: "50-credits" // Custom slug for easy reference in Checkout URL, e.g. /checkout/pro
                        }
                    ],
                    successUrl: "/success?checkout_id={CHECKOUT_ID}",
                    authenticatedUsersOnly: true
                }),
                portal(),
                usage(),
                webhooks({
                    secret: process.env.POLAR_WEBHOOK_SECRET,
                    onOrderPaid: async(order) =>{
                        const externalCustomerId = order.data.customer.id;

                        if(!externalCustomerId){
                            console.log("no external customer id found")
                            throw new Error ("no external customer id found")
                        }

                        const productId = order.data.productId;
                        let creditsToAdd = 0;

                        switch(productId){
                            case "a8ff4fa7-4d11-414d-a498-69eeaa5b1b74":
                                creditsToAdd=50;
                                break;

                             case "e70fef4c-942a-4098-8d26-f31b3307f0ed":
                                creditsToAdd=100;
                                break;

                             case "dca88f28-596a-4e22-89b6-1b0f6d0f9fc5":
                                creditsToAdd=200;
                                break;
                        }

                        await db.user.update({
                            where:{id:externalCustomerId},
                            data:{
                                credits:{
                                    increment: creditsToAdd,
                                }
                            }
                        })

                    }
                })
            ],
        })
    ]
});