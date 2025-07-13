'use server'
import { auth } from "@/auth";
import { Topic } from "@/generated/prisma";
import { prisma } from "@/lib";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {z} from "zod";

const createTopicschema=z.object({
    name:z.string().min(3).regex(/^[a-zA-Z0-9 ]+$/, "Name must be alphanumeric"),
    description:z.string().min(10).max(500)
});

type CreateTopicFormState={
    errors:{
        name?:string[],
        description?:string[],
        formError?:string[]
    }
}


export const createTopic = async (prevState:CreateTopicFormState,formData: FormData):Promise<CreateTopicFormState> => {
    const result= createTopicschema.safeParse({
        name:formData.get("name"),
        description:formData.get("description")
    });
    if(!result.success){
        return {
            errors:result.error.flatten().fieldErrors
        }
    }
    const session=await auth();
    if(!session||!session.user){
        return {
            errors:{
                formError:["You have to login to create a topic!"]
            }
        }
    }
    let topic:Topic;
    const existingTopic = await prisma.topic.findUnique({
        where:{
            slug:result.data.name
        }
    });

    if(existingTopic){
        return{
            errors:{
                formError:["Topic with this name already exists,please choose a different name."]
            }
        }
    }

    try{
        topic=await prisma.topic.create({
            data:{
                name:result.data.name,
                slug:result.data.name,
                description:result.data.description

            }
        })
    }catch(error){
        if(error instanceof Error){
            return {
                errors:{
                    formError:[error.message]
                }
            }
        }else{
            return {
                errors:{
                    formError:["An unexpected error occurred while creating the topic."]
                }
            }
        }
    }
    

    revalidatePath('/');
    redirect(`/topic/${topic.slug}`)

}