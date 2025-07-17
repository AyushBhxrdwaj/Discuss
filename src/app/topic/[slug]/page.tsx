import { Button } from "@/components/ui/button";
import React from "react";
import PostFormCreate from "@/components/posts/PostFormCreate";
import PostList from "@/components/posts/post-lists";
import { fetchPostBySlug } from "@/lib/query/post";
type TopicshowPageProps = {
  params: Promise<{ slug: string }>;
};

const showPage: React.FC<TopicshowPageProps> = async ({ params }) => {
  const slug = (await params).slug;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
      <div className="md:col-span-3 space-y-4">
        <h1 className="text-2xl font-bold">{decodeURIComponent(slug)}</h1>
        <PostList fetchData={()=>fetchPostBySlug(slug)} />
      </div>

      <div className="flex md:items-start items-center justify-center md:justify-end">
        <PostFormCreate slug={slug} />
      </div>
    </div>
  );
};

export default showPage;
