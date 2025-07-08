"use client";
import Particles from "@/blocks/Backgrounds/Particles";
import { Button } from "@/components/ui/button";
import React from "react";
const page = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      <div className="absolute -z-100 inset-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <form className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg flex flex-col gap-4">
        <Button variant="default">Signin</Button>
        <Button variant="default">Signout</Button>
      </form>
    </div>
  );
};

export default page;
