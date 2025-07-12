import React from "react";
import { Input } from "@/components/ui/input";
import FuzzyText from "@/blocks/TextAnimations/FuzzyText";
import AuthHeader from "./auth-header";
const Header =() => {
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
        <AuthHeader/>
        
      </div>
    </div>
  );
};

export default Header;
