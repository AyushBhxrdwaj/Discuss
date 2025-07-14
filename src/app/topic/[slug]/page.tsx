import { Button } from "@/components/ui/button";
import React from "react";
import PostFormCreate from "@/components/posts/PostFormCreate"
type TopicshowPageProps = {
  params: Promise<{ slug: string }>;
};

const showPage: React.FC<TopicshowPageProps> = async ({ params }) => {
  const slug = (await params).slug;
  return (
    <div className="flex justify-between items-center p-5 mt-3">
      <div className="col-span-3">
        <h1 className="text-lg font-md">{slug}</h1>
      </div>
      <div>
        <PostFormCreate slug={slug} />
      </div>
    </div>
  );
};

export default showPage;
