import { Post } from "@/generated/prisma";
import { prisma } from "@/lib";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { postwithData } from "@/lib/query/post";

type PostListProps={
  fetchdata:()=>Promise<postwithData[]>
}
const postList:React.FC<PostListProps> = async ({fetchData}) => {
  const posts=await fetchData();
  console.log(posts)
  return (
    <div className="flex flex-col gap-4 shadow-2xl">
       {[1, 2].map((post,index) => (
        <Card key={index} className="bg-zinc-900 w-280 border-zinc-700 shadow-xl shadow-white/10">
          <CardHeader>
            <CardTitle className="text-white">DSA new post</CardTitle>
            <CardDescription className="flex items-center justify-between">
              <h1>By Ayuxh</h1>
              <h1>100 comments</h1>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default postList;
