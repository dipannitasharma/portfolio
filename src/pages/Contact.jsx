import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative bg-[#110619] px-6 md:px-20 py-24 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/25 rounded-full blur-[120px]" />
            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-pink-500/25 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]" />

            {/* Heading */}
            <div className="relative z-10 flex flex-col items-center text-center mb-20">
                <h1 className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl px-12 py-5 shadow-2xl text-3xl md:text-4xl font-bold text-white">
                    Contact
                </h1>
                <p className="mt-5 text-gray-400 italic">
                    Available for collaboration and discussion.
                </p>
            </div>
            {/* Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10 max-w-xl mx-auto
                backdrop-blur-xl bg-white/10
                border border-white/20
                rounded-3xl p-10
                shadow-2xl text-white"
                    >
                {/* Intro text */}
                <p className="text-gray-300 leading-relaxed mb-10 text-center">
                    I’m always open to learning, collaborating, or discussing ideas.
                    If something here caught your attention, feel free to reach out.
                </p>
                {/* EMAIL (primary) */}
                <div className="mb-10">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 text-center">
                        Email
                    </p>
                    <a
                        href="mailto:dipannitasharma1@gmail.com"
                        className="
                        group flex items-center justify-center gap-3 sm:gap-4
                        px-5 sm:px-6 py-4
                        rounded-2xl
                        bg-white/5 border border-white/15
                        hover:bg-white/10
                        transition
                        ">
                        {/* Icon wrapper for proper tap size */}
                        <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full">
                            <FaEnvelope className="text-base sm:text-lg text-[#FFD41D]" />
                        </div>
                        {/* Email text */}
                        <span
                            className="
                            text-sm sm:text-base
                            text-gray-200 group-hover:text-white
                            transition
                            break-all sm:break-normal
                        ">
                            dipannitasharma1@gmail.com
                        </span>
                    </a>
                </div>
                {/* Divider */}
                <div className="w-full h-px bg-white/15 mb-8" />
                {/* SOCIALS */}
                <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 text-center">
                        Elsewhere
                    </p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/dipannita-sharma-4906ab291"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center
                rounded-full bg-white/5 border border-white/15
                hover:bg-white/10 hover:scale-110 transition"
                        >
                            <FaLinkedin className="text-lg text-[#FFD41D]" />
                        </a>

                        <a
                            href="https://github.com/dipannitasharma"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center
                rounded-full bg-white/5 border border-white/15
                hover:bg-white/10 hover:scale-110 transition"
                        >
                            <FaGithub className="text-lg text-[#FFD41D]" />
                        </a>
                    </div>
                </div>

                {/* Footer line */}
                <p className="mt-10 text-sm text-gray-400 italic text-center">
                    Open to conversations and collaborations.
                </p>
            </motion.div>
        </section>
    );
};

export default Contact;
