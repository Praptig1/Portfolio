"use client";

import { motion } from "framer-motion";
import React from "react";
import { ExperienceCard, Experience } from "./ExperienceCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const revealVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ExperienceContent({ experiences }: { experiences: Experience[] }) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen w-screen overflow-x-hidden bg-[#f7efe5] pb-32 text-[#3b2f2f]"
    >
      <div className="mx-auto max-w-7xl px-6 pt-20 lg:px-8 md:pt-24 lg:pt-32">
        <motion.div variants={revealVariant} className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#8b6f5a]">
            Work, teaching, and creative technology
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f5f55]">
            My experience brings together software development, creative
            technology, teaching, communication, and operations. I enjoy work
            that involves solving problems, learning quickly, and building
            useful experiences for real people.
          </p>
        </motion.div>

        <motion.div
          variants={revealVariant}
          className="mt-12 h-px w-full bg-[#8b6f5a]/40"
        />

        <motion.div
          variants={revealVariant}
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.role}-${experience.company}`}
              experience={experience}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
