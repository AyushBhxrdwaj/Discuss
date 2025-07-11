import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { signIn } from "@/app/actions/sign-in";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { LogOut } from "lucide-react";
import FuzzyText from "@/blocks/TextAnimations/FuzzyText";
import { signOut } from "@/app/actions/sign-out";
const Header = async () => {
  const session = await auth();
  return (
    <div className="grid grid-cols-3 items-center h-15">
      <div className="flex justify-start">
        <FuzzyText
          baseIntensity={0.12}
          hoverIntensity={0.18}
          enableHover={true}
        >
          DisCuss
        </FuzzyText>
      </div>
      <div className="flex justify-center">
        <Input
          className="text-gray-400 placeholder:text-gray-400 font-medium border-2 border-gray-600 italic"
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
                <AvatarFallback className="font-bold outline-8 bg-zinc-300 italic">
                  A
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="backdrop-blur-2xl border-none bg-slate-900 flex flex-col h-60 w-50 items-center justify-around">
              <span className="text-gray-300 italic font-medium text-lg ">
                {session.user.name}
              </span>
              <form action={signOut}>
                <Button variant="default">
                  <LogOut />
                  SignOut
                </Button>
              </form>
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
