"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export interface Experience {
  role: string;
  company: string;
  date: string;
  logo: string;
  highlights: string[];
  tools: string[];
}

interface Props {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: Props) {
  const layoutClasses = "lg:col-span-1 min-h-[320px]";

  return (
    <motion.article
      initial={{ opacity: 0.05, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`group relative overflow-hidden rounded-3xl shadow-sm ${layoutClasses}`}
    >
      <Image
        src={experience.logo}
        alt={`${experience.company} logo`}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70 transition duration-500 group-hover:from-black/65 group-hover:to-black/80" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
        <div>
          <p className="text-sm font-semibold text-white/90">
            {experience.company}
          </p>

          <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight text-white md:text-4xl">
            {experience.role}
          </h2>

          <p className="mt-3 text-sm font-medium text-white/80">
            {experience.date}
          </p>
        </div>

        <div>
          <div className="mb-5 flex flex-wrap gap-2">
            {experience.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-96 group-hover:opacity-100">
            <div className="rounded-2xl bg-[#fffaf3]/90 p-4 text-[#3b2f2f] shadow-sm backdrop-blur-md">
              <ul className="space-y-2 text-sm leading-6">
                {experience.highlights.slice(0, 4).map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#8b6f5a]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-sm font-medium text-white/90 transition duration-300 group-hover:mt-4">
            Hover to read more
          </p>
        </div>
      </div>
    </motion.article>
  );
}