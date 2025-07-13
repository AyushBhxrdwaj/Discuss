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
import { createTopic } from "@/actions/create-topics";
import { useActionState } from "react";
const CreateForm = () => {
  const [formState, action] = useActionState(createTopic, { errors: {} });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="z-10 bg-black/45">New Topic</Button>
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
            <DialogTitle className="text-white">Create New Topic</DialogTitle>
            <DialogDescription className="text-gray-300">
              Fill in the details for your new discussion topic.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter topic name"
                className="bg-gray-800 text-white"
              />
            </div>
            {formState.errors.name && (
              <p className="text-red-500 text-sm ">{formState.errors.name}</p>
            )}
            <div className="grid gap-2">
              <Label htmlFor="description" className="text-white">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="What's thinking today?"
                className="bg-slate-800 text-white h-20"
              />
            </div>
            {formState.errors.description && (
              <p className="text-red-500 text-sm">
                {formState.errors.description}
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
