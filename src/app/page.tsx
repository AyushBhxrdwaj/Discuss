import Particles from "@/blocks/Backgrounds/Particles";
import PostList from "@/components/posts/post-lists";
import CreateForm from "@/components/Topics/CreateForm";
import { fetchTopPosts } from "@/lib/query/post";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={5}
          speed={0.2}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-3">
          <h1 className="text-white font-bold text-xl mb-5">Top Posts</h1>
          <PostList fetchData={fetchTopPosts}/>
        </div>
        <div className="flex justify-end">
          <CreateForm />
        </div>
      </div>
    </div>
  );
}
