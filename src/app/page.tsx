'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import Particles from "@/blocks/Backgrounds/Particles";
import { Button } from "@/components/ui/button";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      <div className="absolute -z-10 inset-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="bg-white/10 backdrop-blur-md p-5 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4">
        {session ? (
          <>
            <p className="text-white">Welcome, {session.user?.name}</p>
            <Button onClick={() => signOut()}>Sign Out</Button>
          </>
        ) : (
          <Button onClick={() => signIn("github")}>Sign in with GitHub</Button>
        )}
      </div>
    </div>
  );
}
