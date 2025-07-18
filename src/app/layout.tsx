import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import Particles from "@/blocks/Backgrounds/Particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DisCuss | Community Platform",
  description: "Discuss your ideas with the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full overflow-x-hidden bg-black text-white`}
      >
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={1000}
            particleSpread={8}
            speed={0.2}
            particleBaseSize={80}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <SessionProvider>
          <Header />
          <main className="max-w-7xl mx-auto px-4">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
