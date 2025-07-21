'use client'
import React from "react";
import { Input } from "./ui/input";
import { useSearchParams } from "next/navigation";
import { search } from "@/actions/search";
const searchInput = () => {
  const searchParam = useSearchParams();
  return (
    <form action={search}>
      <Input
      name="term"
        defaultValue={searchParam.get("term" || "")}
        className="text-gray-400 placeholder:text-gray-400 font-medium border-2 border-gray-300 w-full max-w-md"
        type="text"
        placeholder="Search Post...."
      />
    </form>
  );
};

export default searchInput;
