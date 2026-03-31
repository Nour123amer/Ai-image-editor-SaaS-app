"use server";

import { auth } from "lib/auth";
import { headers } from "next/headers";
import { db } from "~/server/db";

export async function updateBilling(updatedName:string, updatedEmail:string) {
  const session = await auth.api.getSession({
    headers: await headers(),
   });

    if(!session) return null;

     const updated = await db.user.update({
        where:{
            id:session.user.id
        },
        data:{
            name:updatedName,
            email:updatedEmail,
        },
        select:{
            name:true, email:true

        }
     })

     return updated;

}