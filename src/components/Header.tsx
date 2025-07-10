import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { signIn } from "@/app/actions/sign-in";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {LogOut} from 'lucide-react'
const Header = async () => {
  const session = await auth();
  return (
    <div className="grid grid-cols-3 items-center h-15">
      <div className="flex justify-start">
        <h1 className="font-bold text-3xl bg-gradient-to-r from-zinc-300 via-gray-500 to-slate-400 bg-clip-text text-transparent ">
          DisCuss
        </h1>
      </div>
      <div className="flex justify-center">
        <Input
          className="text-gray-400 placeholder:text-gray-400 font-medium"
          type="text"
          placeholder="Search Post...."
        />
      </div>
      <div className="flex justify-end gap-5">
        {session?.user ? (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage src={session.user.image || ""} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="bg-gradient-to-r from-gray-500 via-zinc-600 to-slate-600 flex flex-col h-60 w-30">
                <span className="">{session.user.name}</span>
                <Button variant="default"><LogOut/>SignOut</Button>
            </PopoverContent>
          </Popover>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Header;
