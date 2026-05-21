import React from "react";
import Particles from "./components/particles";

export default function Home() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#f7efe5] pb-28 text-[#3b2f2f]">
      <Particles
        className="absolute inset-0 z-0 animate-fade-in"
        quantity={160}
      />

      <main className="z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center animate-fade-in">
        <p className="mb-4 rounded-full bg-[#ead8c0]/60 px-4 py-2 text-sm text-[#7a6252]">
          Software Developer · Creative Technologist · Human-Centered Design
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-[#3b2f2f] md:text-7xl">
          Hi, I&apos;m Prapti Gurung
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f5f55] md:text-lg">
          I&apos;m a Computer Science and Psychology graduate building
          thoughtful, human-centered digital experiences across web, VR, and
          creative technology.
        </p>
      </main>

      <div className="absolute bottom-24 z-10 animate-fade-in text-center">
        <p className="text-sm text-[#9b8677]">
          Exploring the intersection of code, psychology, design, and care.
        </p>
      </div>
    </div>
  );
}