"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
const CommentCreateForm = () => {
  const [open, setopen] = useState(true);
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
        <form className="space-y-2" action="">
          <Textarea
          name="content"
            className="font-bold focus-visible:ring-0"
            placeholder="write a comment..."
          />
          <Button className="" variant="secondary" size={"sm"}>
            Save
          </Button>
        </form>
      )}
    </div>
  );
};

export default CommentCreateForm;
