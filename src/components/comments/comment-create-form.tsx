"use client";
import React, { useActionState, useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { createComment } from "@/actions/create-comment";
import { Loader2 } from "lucide-react";

type CommentcreateFoprmProps={
  postId:string,
  parentId?:string,
  startOpen?:boolean
}
const CommentCreateForm:React.FC<CommentcreateFoprmProps> = ({postId,parentId,startOpen}) => {
  const [open, setopen] = useState(startOpen);
  const [formState,action,isPending]=useActionState(createComment.bind(null,{postId,parentId}),{errors:{}})
  return (
    <div>
      <Button
        className=" mr-3 text-white font-bold"
        size={"sm"}
        variant="link"
        onClick={() => setopen(!open)}
      >
        Reply
      </Button>
      {open && (
        <form className="space-y-2" action={action}>
          <Textarea
          name="content"
            className="font-bold focus-visible:ring-0"
            placeholder="write a comment..."
          />
          {formState.errors.content&& <p className="text-red-600 text-lg">{formState.errors.content}</p>}
          {formState.errors.formError&& <div className="bg-gray-800 rounded-xl border p-3 font-bold border-gray-400 text-red-600 text-lg">{formState.errors.formError}</div>}
          <Button disabled={isPending} className="" variant="secondary" size={"sm"}>
            {
              isPending?(
                <>
                <Loader2/>
                Please Wait
                </>
              ):"Save"
            }
            
          </Button>
        </form>
      )}
    </div>
  );
};

export default CommentCreateForm;
