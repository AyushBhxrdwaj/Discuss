import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { PostwithData } from "@/lib/query/post";
import Link from "next/link";

type PostListProps = {
  fetchData: () => Promise<PostwithData[]>;
  
};
const PostList: React.FC<PostListProps> = async ({ fetchData }) => {
  const posts = await fetchData();
  return (
    <div className="flex flex-col gap-4 shadow-2xl">
      {posts.map((post) => (
        <Card key={post.id} className="bg-zinc-900/15 w-280 border-zinc-700">
          <CardHeader>
            <Link href={`/topic/${post.topic?.slug}/posts/${post.id}`}>
              <CardTitle className="text-white text-xl">{post.title}</CardTitle>
            </Link>
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

export default PostList;
