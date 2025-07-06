import Particles from "@/blocks/Backgrounds/Particles";
import { Button } from "@/components/ui/button";
import React from "react";
const page = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Button variant="secondary">Button</Button>
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
  );
};

export default page;
