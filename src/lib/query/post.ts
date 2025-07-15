import type { Post } from "@/generated/prisma";
import { prisma } from "..";
export type postwithData = Post & {
  topic: { slug: string };
  _count: { comments: number };
  user: { name: string | null};
};

export const fetchPostBySlug = async (slug:string):Promise<postwithData[]> => {
    return prisma.post.findMany({
        where:{
            topic:{slug}
        },
        include:{
            topic:{select:{slug:true}},
            _count:{select:{comments:true}},
            user:{select:{name:true}}
        }
    })
};
