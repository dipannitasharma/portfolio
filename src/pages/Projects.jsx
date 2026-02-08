import { HiOutlineCode } from "react-icons/hi";
import { FaReact, FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "CA Frontpage Generator",
        status: "Completed",
        desc: "A React app for generating CA frontpage to reduce manual work and errors.",
        extra: "Currently used by 100+ students, saving hours of manual formatting for each subject.",
        tags: ["React", "Tailwind", "React-PDF","PPTXGenJS"],
        github: "https://github.com/dipannitasharma/front-page-generator",
        icon: <HiOutlineCode />,
        highlight: true,
    },
 {
        title: "Color Palette Generator",
        status: "Practice",
        desc: "A small tool for generating and exploring color palettes.",
        extra: "Built to understand color harmony and UI balance.",
        tags: ["JavaScript", "UI"],
        github: "https://github.com/dipannitasharma/Color-Palette-Generator",
        icon: <HiOutlineCode />,
    },
    {
        title: "Quiz App",
        status: "Practice",
        desc: "A simple quiz app with scoring and multiple-choice logic.",
        extra: "Focused on basic state handling and DOM updates.",
        tags: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/dipannitasharma/QUIZ-GAME",
        icon: <HiOutlineCode />,
    },
];

const Projects = () => {
    return (
        <section
            id="project"
            className="relative bg-[#110619] px-6 md:px-20 py-24 overflow-hidden"
        >
            {/* ===== BACKGROUND ===== */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/25 rounded-full blur-[120px]" />
            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-pink-500/25 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]" />

            <div className="relative flex flex-col items-center mb-20 text-center z-10">
                <h1 className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl px-12 py-5 shadow-2xl text-3xl md:text-4xl font-bold text-white">
                    Projects
                </h1>
                <p className="mt-5 text-gray-400 italic">
                    small things, learning experiments, and work in progress
                </p>
            </div>

            {/* ===== PROJECT CARDS ===== */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto z-10">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className={`
              group relative p-8 rounded-3xl
              backdrop-blur-xl bg-white/10
              border border-white/20
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              transition-all duration-500 ease-out
              hover:-translate-y-3 hover:shadow-[0_35px_80px_rgba(0,0,0,0.8)]
              ${project.highlight ? "ring-1 ring-white/20" : ""}
            `}
                    >
                        {/* soft hover glow */}
                        <div className="absolute -inset-1 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                        {/* icon (RIGHT SIDE) */}
                        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl shadow-inner group-hover:scale-110 transition">
                            {project.icon}
                        </div>

                        {/* status */}
                        <span className="relative z-10 text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 mb-6 inline-block">
                            {project.status}
                        </span>

                        {/* title */}
                        <h3 className="relative z-10 text-xl font-semibold text-white mb-2">
                            {project.title}
                        </h3>

                        {/* description */}
                        <p className="relative z-10 text-gray-300 text-sm leading-relaxed mb-4">
                            {project.desc}
                        </p>

                        {/* hover reveal */}
                        <p className="relative z-10 text-gray-400 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                            {project.extra}
                        </p>

                        {/* tags */}
                        <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                            {project.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200 border border-white/10"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* github link */}
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                        >
                            <FaGithub />
                            View code
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
