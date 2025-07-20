import { fetchCommentBYPostID } from '@/lib/query/comment'
import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
type commentShowProps={
    postId:string,
    commentId:string
}
const CommentShow:React.FC<commentShowProps> = async ({commentId,postId}) => {
    const comments = await fetchCommentBYPostID(postId)
    const comment=comments.find((c)=>c.id===commentId);
    if(!comment) return null;
    const childrenComment=comments.filter((c)=>c.parentId=commentId)
  return (
    <div>
        <div>
            <Avatar>
                <AvatarImage src={comment.user.image||""}/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
        {
            childrenComment.map((comment)=>(
                <CommentShow key={comment.id} postId={comment.postId} commentId={comment.id}/>
            ))
        }
    </div>
  )
}

export default CommentShow