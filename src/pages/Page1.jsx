import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Page1 = () => {
    const [bgLoaded, setBgLoaded] = useState(false);

    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden">

            {/* Background image */}
            <motion.img
                src="/bg5.png"
                alt=""
                loading="lazy"
                onLoad={() => setBgLoaded(true)}
                className="absolute inset-0 h-full w-full object-cover brightness-75"
                initial={{ opacity: 0 }}
                animate={{ opacity: bgLoaded ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Content */}
            <div className="relative z-10 min-h-screen">
                <Navbar />

                {/* Hero */}
                <div className="flex min-h-[calc(100vh-64px)] items-center px-6 md:px-12 text-white">

                    <div className="flex w-full flex-col md:flex-row justify-between gap-12">

                        {/* LEFT */}
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                                Hey, <br />
                                I’m{" "}
                                <span className="relative inline-block text-[#FFD41D] italic cursor-default">
                                    <motion.span
                                        whileHover={{ y: -2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="inline-block"
                                    >
                                        Dipannita Sharma
                                    </motion.span>

                                    {/* subtle underline */}
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#FFD41D]/40 scale-x-0 hover:scale-x-100 transition-transform origin-left" />
                                </span>
                            </h1>
                        </motion.div>

                        {/* RIGHT */}
                        <motion.div
                            className="flex items-center max-w-md"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        >
                            <p className="text-lg font-bold text-left  md:mt-90 mt-20">
                                A frontend-focused developer who enjoys building clean,
                                interactive interfaces. Currently exploring React, animations,
                                and modern UI patterns while learning by building real projects.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page1;
