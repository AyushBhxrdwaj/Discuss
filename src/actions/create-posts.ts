"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Post } from "@/generated/prisma";
import { z } from "zod";

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  slug: z.string().min(1),
});

type createPostFormState = {
  errors: {
    title?: string[];
    content?: string[];
    slug?: string[];
    formError?: string[];
  };
};

export const createPost = async (
  _prevState: createPostFormState,
  formData: FormData
): Promise<createPostFormState> => {
  const slug = formData.get("slug") as string;
  const result = createPostSchema.safeParse({
    title: formData.get("title") as string,
    content: formData.get("content") as string,
    slug,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  console.log(result)

  const session = await auth();
  if (!session?.user?.id) {
    return {
      errors: {
        formError: ["You must be logged in to create a post"],
      },
    };
  }

  const decodedSlug = decodeURIComponent(result.data.slug);

  const topic = await prisma.topic.findFirst({
    where: {
      slug: decodedSlug,
    },
  });

  if (!topic) {
    return {
      errors: {
        formError: ["Topic not found"],
      },
    };
  }
  let post:Post;
  try {
    post = await prisma.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (error:unknown) {
    if(error instanceof Error){
        return {
            errors:{
                formError:[error.message]
            }
        }

    }else{
        return{
            errors:{
                formError:["Error creating a post"]
            }
        }
    }
}
revalidatePath(`topic/${slug}`)
redirect(`/topic/${slug}/posts/${post.id}`)
};
