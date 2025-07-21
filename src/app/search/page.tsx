import PostList from "@/components/posts/post-lists";
import { fetchPostBySearch } from "@/lib/query/post";
import React from "react";

type SearchPageProps = {
  searchParams: Promise<{ term: string }>;
};
const page: React.FC<SearchPageProps> = async ({ searchParams }) => {
  const term = (await searchParams).term;
  return (
    <div>
      <h1 className="text-blue-300 font-medium italic mb-3 ">Search result for {term}</h1>
      <PostList fetchData={() => fetchPostBySearch(term)} />
    </div>
  );
};

export default page;
