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
       {posts.map((post) => (
        <Card key={post.id} className="bg-zinc-900/15 w-280 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white">{post.title}</CardTitle>
            <CardDescription className="flex items-center justify-between">
              <h1>By {post.user.name}</h1>
              <h1>{post._count.comments}</h1>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default postList;
