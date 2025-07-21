"use client";

import React, { Suspense } from "react";
import FuzzyText from "@/blocks/TextAnimations/FuzzyText";
import AuthHeader from "./auth-header";
import Link from "next/link";
import SearchInput from "./search-input";
const Header = () => {
  return (
    <div className="grid grid-cols-3 items-center h-16 px-4">
      <div className="flex justify-start">
        <Link href="/">
          <FuzzyText
            baseIntensity={0.12}
            hoverIntensity={0.18}
            enableHover={true}
          >
            DisCuss
          </FuzzyText>
        </Link>
      </div>

      <div className="flex justify-center">
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>
      <div className="flex justify-end gap-4">
        <AuthHeader />
      </div>
    </div>
  );
};

export default Header;
