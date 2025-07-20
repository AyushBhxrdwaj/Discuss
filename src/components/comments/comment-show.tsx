import { fetchCommentBYPostID } from "@/lib/query/comment";
import React from "react";
import { Avatar, AvatarImage,AvatarFallback } from "../ui/avatar";
import CommentCreateForm from "./comment-create-form";
type commentShowProps = {
  postId: string;
  commentId: string;
};
const CommentShow: React.FC<commentShowProps> = async ({
  commentId,
  postId,
}) => {
  const comments = await fetchCommentBYPostID(postId);
  const comment = comments.find((c) => c.id === commentId);
  if (!comment) return null;
  const childrenComment = comments.filter((c) => (c.parentId === commentId));
  return (
    <div className="m-4 p-4 border rounded-xl">
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src={comment.user.image || ""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-3">
          <p className="text-gray-200 font-semibold">{comment.user.name}</p>
          <p className="text-gray-300">{comment.content}</p>
          <CommentCreateForm postId={postId} parentId={comment.id} />
        </div>
      </div>
      {childrenComment.map((comment) => (
        <CommentShow
          key={comment.id}
          postId={postId}
          commentId={comment.id}
        />
      ))}
    </div>
  );
};

export default CommentShow;
