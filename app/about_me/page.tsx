import Link from "next/link";
import React from "react";
import { AboutAside } from "../components/about-aside";

const quickFacts = [
  "Based in Vancouver/Burnaby, BC",
  "Computer Science + Psychology graduate",
  "Interested in software, UX/HCI, VR, and creative technology",
  "Experience with React, Next.js, TypeScript, Unity, and C#",
];

const interests = [
  "Human-centered design",
  "Creative technology",
  "VR experiences",
  "Frontend development",
  "Psychology + tech",
  "Accessible tools",
];

export default async function AboutPage() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-[#f7efe5] pb-32 text-[#3b2f2f]">
      <div className="px-6 pt-20 pb-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <p className="mb-3 text-sm font-medium tracking-wide uppercase text-[#8b6f5a]">
            A little more about me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#3b2f2f]">
            About Me
          </h2>
        </div>

        <div className="w-full h-px bg-[#8b6f5a]/40" />

        <div className="grid grid-cols-1 gap-10 mx-auto lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6 text-base leading-8 text-[#6f5f55] lg:max-w-xl">
            <p>
              Hi, I&apos;m Prapti! I&apos;m a Computer Science and Psychology
              graduate from the University of Victoria in British Columbia,
              Canada. I&apos;m interested in building thoughtful,
              human-centered digital experiences across web, VR, and creative
              technology.
            </p>

            <p>
              My work sits at the intersection of software development, design,
              and human behavior. I enjoy creating digital experiences that are
              not only functional, but also meaningful, approachable, and easy
              for people to use.
            </p>

            <p>
              I&apos;ve worked on projects involving web development,
              production-facing software, programming education, and a VR
              prototype designed to help students manage exam anxiety through
              guided breathing and grounding exercises.
            </p>

            <p>
              When I&apos;m not coding or designing, you can find me hiking in
              the mountains, experimenting with new recipes, or playing around
              with creative tech projects.
            </p>

            <div className="pt-4">
              <Link
                href="/projects"
                className="inline-flex rounded-full bg-[#8b6f5a] px-6 py-3 text-sm font-medium text-white shadow-sm duration-300 hover:bg-[#6f5847]"
              >
                View my projects
              </Link>
            </div>
          </div>

          <AboutAside quickFacts={quickFacts} interests={interests} />
        </div>
      </div>
    </div>
  );
}