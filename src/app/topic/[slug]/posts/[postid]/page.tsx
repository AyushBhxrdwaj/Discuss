import PostShow from '@/components/posts/post-show';
import React from 'react'
type PostShowPageProps={
  params:Promise<{slug:string; postid:string}>
}

const viewPage:React.FC<PostShowPageProps> = async  ({params}) => {
  const {slug, postid}=(await params)
  console.log(postid)
  return (
    <div>
      <PostShow postid={postid}/>
    </div>
  )
}

export default viewPage