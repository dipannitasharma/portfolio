import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hello = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 6000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <motion.div
            className="
        fixed inset-0 z-9999
        flex items-center justify-center
        bg-[#100419]
      "
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
        >
            <div className="text-center">
                <h1 className="text-6xl md:text-8xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#d8b101] to-[#fddf5a] tracking-tight">
                    <Typewriter
                        words={["Hello", "নমস্কার", "नमस्ते"]}
                        cursor
                        cursorStyle="|"
                        cursorColor="#fddf5a"
                        typeSpeed={80}
                        deleteSpeed={60}
                        delaySpeed={1200}
                        loop={0}
                    />
                </h1>
            </div>
        </motion.div>
    );
};

export default Hello;
