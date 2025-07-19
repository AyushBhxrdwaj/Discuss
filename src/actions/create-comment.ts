'use server'
import { auth } from '@/auth'
import {z} from 'zod'

const createCommentSchema=z.object({

    content:z.string().min(3)

})
type CreateCommentState={
    errors:{
        content?:string[],
        formError?:string[];
    }
}

export const createComment = async (formData:FormData):Promise<CreateCommentState>=>{
    const result=createCommentSchema.safeParse({
        content:formData.get('content'),
    })
    if(!result.success){
        return{
            errors:result.error.flatten().fieldErrors
            
        } 

    }
    const session=await auth()
    if(!session || !session.user|| !session.user.id){

    }
}