'use client';
import Particles from "@/blocks/Backgrounds/Particles";
export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden overflow-y-hidden">
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
    </div>
  );
}
