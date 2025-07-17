import StarBorder from '@/blocks/Animations/StarBorder'
import { prisma } from '@/lib'
import { notFound } from 'next/navigation'
import React from 'react'
type postShowprops={
    postid:string
}

const PostShow:React.FC<postShowprops> = async ({postid}) => {
    const post=await prisma.post.findFirst({
        where:{
            id:postid
        }
    });
    if(!post) notFound()
  return (
    <div>
        <h1 className='font-bold my-2 text-2xl'>{post.title}</h1>
        <p className='border rounded-sm p-4 text-lg font-light mt-3'>{post.content}</p>
    </div>
  )
}

export default PostShow