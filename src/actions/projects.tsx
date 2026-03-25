"use server"
import { db } from "~/server/db"
import { headers } from "next/headers"
import { auth } from "lib/auth";

interface CreateProjectData {
    imageUrl:string;
    imageKitId:string;
    filePath:string;
    name?: string
}


export async function createProject(data:CreateProjectData) {
    try{
        const session = await auth.api.getSession({
            headers: await headers()
        })

        if(!session?.user?.id){
            throw new Error("unauthorized")
        }

        const project = await db.project.create({
            data: {
                name:data.name || "untitled project",
                imageKitId: data.imageKitId,
                imageUrl:data.imageUrl,
                filePath:data.filePath,
                userId:session.user.id
            }
        });

     

        return { success : true, project } 
    }catch(error){
        return {success: false, error:"Failed to create project."}
    }
    
}  

export async function getUserProjects() {
    try{
        const session = await auth.api.getSession({
            headers: await headers()
        })

        if(!session?.user?.id){
            throw new Error("unauthorized")
        }

        const projects = await db.project.findMany({
            where:{
                userId: session.user.id,
            },
            orderBy:{
                createdAt:"desc"
            }
        })

        return { success : true, projects}
    }catch(error){
        return {success: false, error:"Failed to create project."}
    }
    
}  

export async function deducateCredits(
    creditsToDeduct:number,
    operation?:  string
){

    try{
        // input validation - prevent negative numbers or invalid inputs
        if(
            !creditsToDeduct ||
             creditsToDeduct <=0 || 
             !Number.isInteger(creditsToDeduct)
        ){
          return {success: false, error: "Invalid credit amount"}  
        }

        const session = await auth.api.getSession({
            headers: await headers(),
        })

        if(!session?.user.id){
            throw new Error("unauthorized")
        }


        // first check if user have enough credits
        const user = await db.user.findUnique({
            where:{ id:session.user.id},
            select:{credits: true}
        })

        if(!user){
            throw new Error ("User not found")
        }

        if(user.credits < creditsToDeduct){
            return {success:false, error:"insufficient credits"}
        }

         // Deduct the specified amount of credits
         const updatedUser = await db.user.update({
            where:{ id:session.user.id},
            data:{credits: user.credits - creditsToDeduct}
         });

         return {success: true, remainingCredits : updatedUser}

    }catch(error){
        console.log(`Credits deduction error ${operation ? `for  ${operation}`:""}`, error)


        return {success: false, error:"failed to deduct credits"}
    }

}

// Legacy function for backward compatiblity 
export async function deductCreditsForBackgroundRemoval() {
    return deducateCredits(1, "background removal")
}


export async function deductCreditsForUpScaling() {
     return deducateCredits(1, "Upscaling")
}