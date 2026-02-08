import { HiOutlineCode } from "react-icons/hi";
import { FaReact, FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";


const projects = [
  {
    title: "CA Frontpage Generator",
    status: "Completed",
    desc: "A React app for generating CA frontpage to reduce manual work and errors.",
    extra: "Currently used by 100+ students, saving hours of manual formatting for each subject.",
    tags: ["React", "Tailwind", "React-PDF", "PPTXGenJS"],
    github: "https://github.com/dipannitasharma/front-page-generator",
    live: "https://ca-front-page-generator.vercel.app", 
    icon: <HiOutlineCode />,
    highlight: true,
  },
  {
    title:"QR Code Generator App",
    status: "Completed",
    desc: "A React app for generating QR codes for any text input.",
    extra: "Simple and efficient tool for creating QR codes with customizable size and file name and fixed club logo in the middle.",
    tags: ["React", "Tailwind", "QR-Code"],
    github: "https://github.com/Xplorica-FIEM/QR_Generator",
    live: "https://xplorica-qr-generator.vercel.app/", 
    icon: <HiOutlineCode />,
  },
  {
    title: "Personal Portfolio",
    status: "In Progress",
    desc: "My personal portfolio website built with React, Tailwind CSS and Framer Motion.",
    extra: "Showcases my projects, skills, and experience in a clean and modern design.",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/dipannitasharma/portfolio",
    live: "https://dipannita.vercel.app/", 
    icon: <FaReact />,
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

                       {/* links */}
                        <div className="relative z-10 mt-6 flex items-center gap-4 text-sm">
                        
                        {/* GitHub */}
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition"
                        >
                            <FaGithub />
                            Code
                        </a>

                        {/* Live */}
                        {project.live && (
                            <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                            >
                            <HiOutlineExternalLink />
                            Live
                            </a>
                        )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
