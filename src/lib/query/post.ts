import type { Post } from "@/generated/prisma";
import { prisma } from "..";

export type PostwithData = Post & {
  topic: { slug: string } | null;
  _count: { comments: number };
  user: { name: string | null };
};

export const fetchPostBySlug = async (
  slug: string
): Promise<PostwithData[]> => {
  const decodedSlug = decodeURIComponent(slug);

  return prisma.post.findMany({
    where: {
      topic: {
        slug: decodedSlug,
      },
    },
    include: {
      topic: { select: { slug: true } },
      _count: { select: { comments: true } },
      user: { select: { name: true } },
    },
  });
};

export const fetchTopPosts=async():Promise<PostwithData[]>=>{
  return prisma.post.findMany({
    orderBy:[
      {
        comments:{_count:'desc'}
      }
    ],
    include:{
      topic:{select:{slug:true}},
      _count:{select:{comments:true}},
      user:{select:{name:true}}
    },
    take:5
  })
}

export const fetchPostBySearch = async (term:string):Promise<PostwithData[]>=>{
  return prisma.post.findMany({
    include:{
      topic:{select:{slug:true}},
      _count:{select:{comments:true}},
      user:{select:{name:true}}

    },
    where:{
      OR:[
        {title:{contains:term}},
        {content:{contains:term}}
    ]
    }
  })
}
