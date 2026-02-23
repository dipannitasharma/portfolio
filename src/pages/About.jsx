import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
    return (
        <section
            id="about"
            className="relative bg-[#110619] px-6 lg:px-20 lg:py-20 py-15 overflow-hidden"
        >
            {/* Floating soft blobs */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/25 rounded-full blur-[120px]" />
            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-pink-500/25 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]" />

            {/* Heading */}
            <div className="relative flex flex-col items-center text-white mb-15">
                {/* <h1 className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl px-12 py-5 shadow-2xl text-3xl md:text-4xl font-bold">
                    About Me
                </h1>
                <p className="mt-5 text-gray-400 text-xl tracking-wide italic">
                    Infinity and not beyond.
                </p> */}
            </div>

            {/* Content */}
            <div className=" relative flex flex-col lg:flex-row justify-center items-stretch gap-14">

                {/* LEFT CARD */}
                <div
                    className="
                    w-full md:w-120
                    backdrop-blur-lg bg-white/5
                    border border-white/15
                    rounded-3xl p-8
                    shadow-2xl
                    flex flex-col gap-6
                    transition-all duration-300 ease-out
                    hover:scale-[1.03]
                    hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
                "
                >
                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                        <img
                            src="/bg6.jpeg"
                            alt="Profile"
                            className="w-full h-64 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm px-4 py-2">
                            <p className="text-xs text-gray-200 tracking-wide">
                                a quiet moment between builds
                            </p>
                        </div>
                    </div>
                    {/* Socials */}
                    <div className="rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-4 flex justify-center gap-5">
                        {[
                            {
                                icon: <FaLinkedin size={18} />,
                                link: "https://www.linkedin.com/in/dipannita-sharma-4906ab291",
                                hover: "hover:text-[#0A66C2]",
                            },
                            {
                                icon: <FaGithub size={18} />,
                                link: "https://github.com/dipannitasharma",
                                hover: "hover:text-white",
                            },
                            {
                                icon: <FaInstagram size={18} />,
                                link: "https://www.instagram.com/sharma_dipannita",
                                hover: "hover:text-[#E4405F]",
                            },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                w-11 h-11 flex items-center justify-center
                                rounded-full bg-white/5
                                border border-white/15
                                text-gray-300
                                ${item.hover}
                                hover:bg-white/10
                                hover:scale-110
                                hover:shadow-lg hover:shadow-white/10
                                transition-all duration-300
                                `}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
                {/* RIGHT CARD */}
                <div
                    className="
                    w-full md:w-120
                    backdrop-blur-lg bg-white/5
                    border border-white/15
                    rounded-3xl p-8
                    shadow-2xl
                    flex flex-col gap-5
                    transition-all duration-300 ease-out
                    hover:scale-[1.03]
                    hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
                "
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
                        Hi, I’m <span className="text-[#FFD41D]">Dipannita Sharma</span>
                    </h2>
                    <p className="text-gray-400 italic text-sm md:text-base">
                        Designing interfaces that feel calm, clear, and intentionally overthought.
                    </p>
                    <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                        I’m a frontend-focused developer who enjoys turning ideas into clean,
                        usable web experiences—usually after questioning every design decision
                        at least twice. I mostly work with
                        <span className="text-white font-medium"> React</span> and modern CSS,
                        focusing on subtle animations and thoughtful UI polish. I learn by
                        building, breaking, and refining, prioritizing clarity and consistency
                        over rushing things out.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default About;
