"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import {createPost} from "@/actions/create-posts"
import { useActionState } from "react";
type PostFormCreateProps = {
    slug:string;
}
const CreateForm:React.FC<PostFormCreateProps> = ({slug}) => {
  const [formState, action] = useActionState(createPost.bind(null,slug),{errors:{}});
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="z-10 bg-black/45 ml-5">Create a Post</Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-[425px] z-50"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(20,20,20,0.9)",
        }}
      >
        <form action={action}>
          <DialogHeader>
            <DialogTitle className="text-white">Create a Post</DialogTitle>
            <DialogDescription className="text-gray-300 font-medium">
              Write a new post for the topic, click save when you are done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="Title" className="text-white">
                Title
              </Label>
              <Input
                id="Title"
                name="Title"
                placeholder="Create a new post"
                className="bg-gray-800 text-white"
              />
            </div>
            {formState.errors.title && (
              <p className="text-red-600 font-medium text-sm ">{formState.errors.title}</p>
            )}
            <div className="grid gap-2">
              <Label htmlFor="content" className="text-white">
                Content
              </Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Write your post content here....."
                className="bg-slate-800 text-white h-20"
              />
            </div>
            {formState.errors.content && (
              <p className="text-red-600 font-medium text-sm">
                {formState.errors.content}
              </p>
            )}
            {formState.errors.formError && (
              <div className="border-red-400 bg-red-500  text-white font-medium text-sm p-2 rounded-xl">
                {formState.errors.formError}
              </div>
            )}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateForm;
