"use client";

import { motion } from "framer-motion";
import React from "react";

interface Props {
  quickFacts: string[];
  interests: string[];
}

export function AboutAside({ quickFacts, interests }: Props) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24, scale: 5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.75, ease: [0.1, 1, 1, 1] }}
      className="rounded-3xl border border-[#c8ad8f]/60 bg-[#fff7ec]/70 p-6 shadow-sm backdrop-blur-sm"
    >
      <h3 className="text-xl font-semibold text-[#3b2f2f]">Quick facts</h3>

      <div className="mt-5 space-y-3 text-sm leading-6 text-[#6f5f55]">
        {quickFacts.map((fact) => (
          <p key={fact} className="rounded-2xl bg-[#ead8c0]/60 px-4 py-3 transition duration-300 ease-in-out hover:bg-[#ead8c0]/90">
            {fact}
          </p>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-[#3b2f2f]">Currently drawn to</h3>

        <div className="mt-5 flex flex-wrap gap-3">
          {interests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-[#c8ad8f]/70 bg-[#fffaf3]/80 px-4 py-2 text-sm text-[#7a6252] transition duration-300 ease-in-out hover:border-[#8b6f5a] hover:text-[#5d463b]"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
