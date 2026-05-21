"use client";

import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";

const socials = [
  {
    icon: <Mail size={22} />,
    href: "mailto:praptigrg1@gmail.com",
    label: "Email me",
    handle: "praptigrg1@gmail.com",
    description: "For opportunities, collaborations, or just to say hello.",
  },
  {
    icon: <Github size={22} />,
    href: "https://github.com/Praptig1",
    label: "GitHub",
    handle: "Praptig1",
    description: "View my code, projects, and experiments.",
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-[#f7efe5] pb-32 text-[#3b2f2f]">
      <Navigation />

      <div className="pointer-events-none absolute left-10 top-24 h-72 w-72 rounded-full bg-[#ead8c0]/70 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-24 h-80 w-80 rounded-full bg-[#c8ad8f]/40 blur-3xl" />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#8b6f5a]">
            Let&apos;s connect
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#3b2f2f] sm:text-5xl">
            Contact Me
          </h1>

          <p className="mt-5 text-base leading-8 text-[#6f5f55]">
            I&apos;m always happy to chat about software roles, creative tech,
            HCI/UX, VR projects, or anything at the intersection of people and
            technology.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {socials.map((s) => (
			<Link
				key={s.href}
				href={s.href}
				target={s.href.startsWith("mailto:") ? undefined : "_blank"}
				rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
				className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-[#c8ad8f]/60 bg-[#fff7ec]/80 p-7 shadow-sm backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
			>
				<div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#8b6f5a]/20 blur-2xl transition duration-700 group-hover:scale-125" />
				<div className="absolute -bottom-20 left-8 h-52 w-52 rounded-full bg-[#fffaf3]/70 blur-3xl transition duration-700 group-hover:scale-110" />

				<div className="relative z-10">
				<div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c8ad8f]/70 bg-[#fffaf3]/90 text-[#8b6f5a] shadow-sm transition duration-300 group-hover:rotate-3 group-hover:bg-[#8b6f5a] group-hover:text-white">
					{s.icon}
				</div>

				<h2 className="mt-6 text-2xl font-bold text-[#3b2f2f]">
					{s.label}
				</h2>

				<p className="mt-3 text-sm leading-6 text-[#6f5f55]">
					{s.description}
				</p>
				</div>

				<div className="relative z-10 mt-8">
				<p className="break-all text-sm font-semibold text-[#6f5847] transition duration-300 group-hover:translate-x-1 group-hover:text-[#3b2f2f]">
					{s.handle} →
				</p>
				</div>
			</Link>
			))}
        </div>
      </main>
    </div>
  );
}