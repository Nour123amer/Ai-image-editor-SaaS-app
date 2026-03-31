"use server";

import { auth } from "lib/auth";
import { headers } from "next/headers";
import { db } from "~/server/db";

export async function getUser() {
   const session = await auth.api.getSession({
    headers: await headers(),
   });
 console.log(db)
   if(!session) return null;

   const user = await db.user.findUniqueOrThrow({
    where:{  id:session.user.id  },
    select:{  name:true, email:true, id:true, credits:true, createdAt:true, updatedAt:true  }
   })

  
   return user;
    
}