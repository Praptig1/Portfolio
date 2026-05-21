"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { Github } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  href: string;
  tools: string[];
  highlights: string[];
  featured?: boolean;
  githubLink: string;
}

interface Props {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        rotate: index % 2 === 0 ? -1.5 : 1.5,
        scale: 1.02,
      }}
      className={project.featured ? "lg:col-span-2" : ""}
    >
      <Link
        href={project.href}
        className="group relative flex min-h-[360px] overflow-hidden rounded-[2rem] border border-[#c8ad8f]/60 bg-[#fff7ec]/80 p-6 shadow-sm backdrop-blur-sm transition duration-500 hover:shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff7ec] via-[#ead8c0] to-[#b59882] opacity-90" />

        <motion.div
          className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#8b6f5a]/20 blur-2xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-[#fffaf3]/50 blur-3xl"
          animate={{
            x: [0, 24, 0],
            y: [0, -18, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 flex h-full w-full flex-col justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#8b6f5a]">
              {project.category}
            </p>

            <h2 className="mt-4 max-w-full text-3xl font-bold leading-tight text-[#3b2f2f]">
              {project.title}
              
            </h2>

            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
              <p className="mt-6 max-w-full text-sm leading-7 text-[#6f5f55]">
                {project.description}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[#c8ad8f]/70 bg-[#fffaf3]/80 px-3 py-1 text-xs text-[#7a6252]"
                >
                  {tool}
                  
                </span>
              ))}
            </div>

          </div>

          <div className="mt-6 flex h-full flex-col justify-between">
            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-96 group-hover:opacity-100">
              <ul className="mt-5 space-y-2 text-sm leading-6 text-[#6f5f55]">
                {project.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#8b6f5a]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center gap-4">
                <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#3b2f2f] px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#6f5847]"
                >
                    View on GitHub
                    <Github size={16} />
                </Link>

                <Link
                    href={project.href}
                    className="text-sm font-semibold text-[#6f5847] transition duration-300 hover:translate-x-1 hover:text-[#3b2f2f]"
                >
                    View case study →
                </Link>
                </div>
          </div>
          
        </div>
      </Link>
    </motion.div>
  );
}