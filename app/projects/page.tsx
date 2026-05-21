import React from "react";
import { ProjectCard } from "./projectCard";

const projects = [
  {
    title: "VR Emotion Regulation Application",
    category: "Featured · VR / HCI / Psychology",
    subtitle: "Supervised by Dr. Alexandra Kitson, University of Victoria",
    description:
      "A Unity VR application designed to help students manage exam anxiety through guided breathing, grounding, real-time check-ins, and reflective feedback.",
    href: "/projects/vr-emotion-regulation",
    tools: ["Unity", "C#", "XR Interaction Toolkit", "Unity EventSystem"],
    highlights: [
      "Developed a multi-scene VR application with interactive user workflows for real-time input and feedback.",
      "Designed modular components for state management and UI flow control across scenes.",
      "Implemented event-driven interaction systems using XR Interaction Toolkit and Unity EventSystem.",
      "Debugged scene transitions, UI behavior, and state inconsistencies to improve reliability.",
    ],
    githubLink: "https://github.com/Praptig1/VR-Exam-Anxiety-Research",
    featured: true,
  },
  {
    title: "Nest: Nature Journaling App",
    category: "Full-Stack Web App",
    description:
      "A full-stack nature journaling app that lets users upload, organize, and revisit geotagged nature observations through a calming interface.",
    href: "/projects/nest",
    tools: ["Next.js", "React", "TypeScript", "Supabase", "Apollo Client", "Lottie"],
    highlights: [
      "Built a journaling application for uploading and organizing geotagged nature observations.",
      "Implemented authentication features, including email-based 2FA.",
      "Integrated Supabase and GraphQL with Apollo Client for efficient data management.",
      "Enhanced the user experience with responsive UI components and Lottie animations.",
    ],
    githubLink: "https://github.com/Praptig1/nest",
    featured: false,
  },
  {
    title: "Full Recipe App",
    category: "Frontend / API Project",
    description:
      "A dynamic recipe search app that uses the Spoonacular API to help users browse recipes by cuisine, diet, and cooking time.",
    href: "/projects/recipe-app",
    tools: ["React", "JavaScript", "CSS", "HTML", "Spoonacular API"],
    highlights: [
      "Developed a recipe application using external API data from Spoonacular.",
      "Implemented search and filtering by cuisine type, dietary preferences, and cooking time.",
      "Designed responsive UI components for a smoother browsing experience.",
      "Managed API data fetching and state updates for efficient result rendering.",
    ],
    githubLink: "https://github.com/Praptig1/recipe-app",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-[#f7efe5] pb-32 text-[#3b2f2f]">
      <div className="pointer-events-none absolute left-10 top-24 h-72 w-72 rounded-full bg-[#ead8c0]/60 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-64 h-80 w-80 rounded-full bg-[#c8ad8f]/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pt-20 lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#8b6f5a]">
            Selected work
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projects
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f5f55]">
            A collection of software, VR, and creative technology projects
            focused on thoughtful, human-centered digital experiences.
          </p>
        </div>

        <div className="mt-12 h-px w-full bg-[#8b6f5a]/30" />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}