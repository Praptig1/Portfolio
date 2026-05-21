import React from "react";
import { ExperienceContent } from "./ExperienceContent";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "MetaLab",
    date: "May 2025 – Sept 2025",
    logo: "/logos/metalab_logo.png",
    highlights: [
      "Created an automated patient intake interface using React and TypeScript, minimizing manual data review and helping doctors efficiently interpret risk factors through interactive visualizations.",
      "Developed D3.js visualizations to transform doctor-designed questionnaire data into interactive health insights, helping users and clinicians identify wellness trends and risk factors more effectively.",
      "Integrated GraphQL queries and mutations to efficiently fetch and display user health data, ensuring accurate and up-to-date information throughout the application.",
      "Collaborated closely with engineers, designers, and product managers to debug UI and data issues, investigate GraphQL schema mismatches, and improve reliability through testing and documentation.",
    ],
    tools: ["React", "GraphQL", "Testing", "Debugging", "Documentation"],
  },
  {
    role: "Software Programming Instructor Lead and Office Coordinator",
    company: "Code Ninjas",
    date: "Aug 2024 – Apr 2025",
    logo: "/logos/code-ninjas_logo.png",
    highlights: [
      "Led a team of 10+ instructors in delivering engaging programming best practices and education to students aged 7-14, fostering a positive and inclusive learning environment.",
      "Coordinated scheduling, curriculum planning, and communication between instructors, students, and parents to ensure smooth operations and high-quality educational experiences.",
      "Helped develop and implement a new curriculum focused on creative coding and game development, resulting in increased student engagement and satisfaction.",
      "Provided expertise in software development and education to support instructors in delivering effective lessons, troubleshooting technical issues, and fostering a love for coding among students.",
    ],
    tools: ["Teaching", "Scratch", "JavaScript", "Robotics", "Team Coordination"],
  },
];

export default function ExperiencePage() {
  return <ExperienceContent experiences={experiences} />;
}