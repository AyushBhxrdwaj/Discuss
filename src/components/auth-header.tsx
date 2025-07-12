"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "@/app/actions/sign-in";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { LogOut } from "lucide-react";
import { signOut } from "@/app/actions/sign-out";
import { Separator } from "./ui/separator";

const AuthHeader = () => {
  const session = useSession();
  if(!session.data?.user) return null;
  let authContent: React.ReactNode;
  if (session.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger asChild>
          <Avatar>
            <AvatarImage src={session.data.user.image || ""} />
            <AvatarFallback className="font-bold outline-8 bg-zinc-300 italic">
              A
            </AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="backdrop-blur-2xl border-none bg-slate-900 flex flex-col h-60 w-50 items-center gap-8 py-5 px-3">
          <h1 className="text-gray-100 italic font-light text-lg mt-3 ">
            {session.data.user.name}
          </h1>
          <Separator className="my-2 bg-gray-600" />
          <form action={signOut}>
            <Button variant="default" className="border-none">
              <LogOut />
              SignOut
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <form action={signIn}>
          <Button className="text-gray-400 mr-3" variant="ghost">
            SignIn
          </Button>
          <Button className="text-gray-400" variant="default">
            SignUp
          </Button>
        </form>
      </>
    );
  }
  return authContent;
};

export default AuthHeader;
