import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

/* ---------------- DATA ---------------- */

const skills = [
  {
    title: "HTML",
    icon: <FaHtml5 />,
    desc: "Semantic structure and meaningful markup for the web.",
    tags: ["semantic", "structure", "a11y"],
    glow: "from-orange-400/40 to-red-500/40",
    titleStyle: "from-orange-300 to-red-400",
  },
  {
    title: "CSS",
    icon: <FaCss3Alt />,
    desc: "Layouts, spacing, rhythm, and visual balance.",
    tags: ["flexbox", "grid", "responsive"],
    glow: "from-blue-400/40 to-cyan-500/40",
    titleStyle: "from-sky-300 to-cyan-400",
  },
  {
    title: "JavaScript",
    icon: <FaJs />,
    desc: "Logic, interactions, and browser behavior.",
    tags: ["events", "state", "logic"],
    glow: "from-yellow-300/40 to-orange-400/40",
    titleStyle: "from-yellow-300 to-orange-400",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
    desc: "JavaScript with guardrails and clarity.",
    tags: ["types", "interfaces", "tooling"],
    glow: "from-sky-400/40 to-blue-600/40",
    titleStyle: "from-sky-400 to-blue-500",
  },
  {
    title: "React",
    icon: <FaReact />,
    desc: "Reusable components and UI state.",
    tags: ["components", "hooks", "state"],
    glow: "from-cyan-400/40 to-indigo-500/40",
    titleStyle: "from-cyan-300 to-indigo-400",
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss />,
    desc: "Utility-first styling without the mess.",
    tags: ["utilities", "design", "speed"],
    glow: "from-teal-400/40 to-emerald-500/40",
    titleStyle: "from-teal-300 to-emerald-400",
  },
  {
    title: "Java",
    icon: <FaJava />,
    desc: "Core programming concepts and OOP.",
    tags: ["OOP", "logic", "basics"],
    glow: "from-orange-500/40 to-red-600/40",
    titleStyle: "from-orange-400 to-red-500",
  },
  {
    title: "Git & GitHub",
    icon: <FaGithub />,
    desc: "Version control and collaboration.",
    tags: ["commits", "branches", "workflow"],
    glow: "from-gray-400/40 to-zinc-500/40",
    titleStyle: "from-gray-300 to-gray-400",
  },
];

/* ---------------- MAIN ---------------- */

const Skills = () => {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const total = skills.length;

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  const handleStart = (x) => setStartX(x);
  const handleEnd = (x) => {
    if (startX === null) return;
    const diff = x - startX;
    if (diff > 80) prev();
    else if (diff < -80) next();
    setStartX(null);
  };

  const left = skills[(index - 1 + total) % total];
  const center = skills[index];
  const right = skills[(index + 1) % total];

  return (
    <section id="skills" className="relative bg-[#110619] px-6 md:px-20 py-24 overflow-hidden flex flex-col items-center">

      {/*  STATIC BACKGROUND  */}
      <div className="absolute inset-0 bg-linear-to-br from-[#2a0f45] via-[#110619] to-[#1a0830]" />
      <div className="absolute -top-40 left-1/4 w-130 h-130 bg-pink-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-130 h-130 bg-indigo-500/20 blur-[160px] rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-size-[56px_56px] opacity-20" />

      {/*  HEADING  */}
      <div className="relative mb-16 text-center z-10">
        <h1 className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl px-12 py-5 shadow-2xl text-3xl md:text-4xl font-bold text-white">
          Skills
        </h1>
        <p className="mt-5 text-gray-300 italic">
          tools I use while learning and building
        </p>
      </div>

      {/*  CAROUSEL  */}
      <div className="relative flex items-center justify-center w-full max-w-4xl h-105  z-10">

        <button
          onClick={prev}
          className="
    absolute flex items-center justify-center left-1 md:left-0 z-20
    w-10 h-10 md:w-14 md:h-14
    rounded-full
    bg-white/10 backdrop-blur
    border border-white/20
    text-white
    hover:scale-110
    transition
  "
        >
          <HiChevronLeft className="text-xl md:text-3xl " />
        </button>


        <div
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseUp={(e) => handleEnd(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        >
          <SkillCard skill={left} position="left" />
          <SkillCard skill={center} position="center" />
          <SkillCard skill={right} position="right" />
        </div>

        <button
          onClick={next}
          className="
    absolute flex items-center justify-center right-1 md:right-0 z-20
    w-10 h-10 md:w-14 md:h-14
    rounded-full
    bg-white/10 backdrop-blur
    border border-white/20
    text-white
    hover:scale-110
    transition
  "
        >
          <HiChevronRight className="text-xl md:text-3xl " />
        </button>

      </div>
    </section>
  );
};

export default Skills;

/* CARD  */

const SkillCard = ({ skill, position }) => {
  const base =
    `
      absolute flex flex-col items-center text-center
      backdrop-blur-xl bg-white/10
      border border-white/20
      rounded-[3rem]
      px-6 md:px-8
      py-8 md:py-10
      shadow-2xl
      transition-all duration-500 ease-out
      w-[280px] sm:w-[300px] md:w-[320px]
      h-[360px] md:h-[380px]
  `;

  const positions = {
    left: "scale-90 -translate-x-52 opacity-50",
    center: "scale-100 z-10 hover:scale-[1.05]",
    right: "scale-90 translate-x-52 opacity-50",
  };

  return (
    <div className={`${base} ${positions[position]}`}>
      {position === "center" && (
        <div
          className={`absolute -inset-1 rounded-[3.2rem] bg-linear-to-br ${skill.glow} blur-2xl`}
        />
      )}

      <div className="relative w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-5xl text-white mb-6 shadow-inner">
        {skill.icon}
      </div>

      <h3
        className={`text-xl font-bold mb-2 bg-linear-to-r ${skill.titleStyle} bg-clip-text text-transparent`}
      >
        {skill.title}
      </h3>

      <p className="text-sm text-gray-200 leading-relaxed mb-4 md:mb-6 px-1 md:px-2">
        {skill.desc}
      </p>


      <div className="w-16 h-px bg-white/30 mb-4 rounded-full" />

      <div className="flex flex-wrap justify-center gap-2">
        {skill.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs text-white bg-white/15 rounded-full border border-white/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
