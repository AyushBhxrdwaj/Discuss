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
        <h1 className='font-bold my-2 text-3xl'>{post.title}</h1>
        <p className='border rounded-lg p-4 border-gray-950 text-lg font-bold mt-5  bg-zinc-900/30 shadow-lg shadow-gray-700/30 '>{post.content}</p>
    </div>
  )
}

export default PostShow