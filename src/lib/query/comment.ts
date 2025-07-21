import { cache } from "react";
import { prisma } from ".."
import type { Comment } from "@/generated/prisma"
type CommentWithAuthor=Comment&{
    user:{name:string|null;image:string|null}

}
export const fetchCommentBYPostID = cache((postId:string):Promise<CommentWithAuthor[]>=>{
    return prisma.comment.findMany({
        where:{postId},
        include:{
            user:{
                select:{
                    name:true,
                    image:true
                }
            }
        }
    })
})
