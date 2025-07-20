import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import PostShow from "@/components/posts/post-show";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
type PostShowPageProps = {
  params: Promise<{ slug: string; postid: string }>;
};

const viewPage: React.FC<PostShowPageProps> = async ({ params }) => {
  const { slug, postid } = await params;
  return (
    <div className="space-y-3">
      <Link href={`/topic/${slug}`}>
        <Button variant="link" className="text-gray-500">
          <ChevronLeft />
          Back to {decodeURIComponent(slug)}
        </Button>
      </Link>
      <PostShow postid={postid} />
      <CommentCreateForm postId={postid} startOpen />
      <CommentList postId={postid}/>
    </div>

  );
};

export default viewPage;
