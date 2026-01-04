import { HiArrowUp, HiInformationCircle } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";

const Footer = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // close tooltip on outside click (mobile-friendly)
    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <footer className="relative bg-[#05010d] px-6 md:px-20 py-16 overflow-hidden">

            {/* soft separation glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-20 bg-linear-to-t from-transparent to-white/5 pointer-events-none" />

            {/* hard divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/15" />

            <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                {/* LEFT */}
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Dipannita Sharma
                </p>

                {/* CENTER */}
                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="text-xs uppercase tracking-widest text-gray-300">
                        End of page — not the end of curiosity
                    </p>

                    {/* subtle acknowledgement easter egg */}
                    <div ref={ref} className="relative">
                        <button
                            onClick={() => setOpen((v) => !v)}
                            className="text-white/30 hover:text-white/60 transition"
                            aria-label="Acknowledgements"
                        >
                            <HiInformationCircle size={16} />
                        </button>

                        <div
                            className={`
                absolute bottom-7 left-1/2 -translate-x-1/2
                w-64 rounded-xl
                bg-[#14081f]/95
                border border-white/10
                px-4 py-3
                text-xs text-gray-300
                shadow-2xl backdrop-blur
                transition-all duration-200
                ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
              `}
                        >
                            
                            <p>
                                Assisted by<span className="text-[#FFD41D]"> Caps</span>.<br />
                                Reality checks by <span className="text-[#FFD41D]"> clue5</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <button
                    onClick={scrollToTop}
                    className="
            group flex items-center gap-2
            px-5 py-2.5 rounded-full
            bg-white/10 border border-white/20
            text-xs uppercase tracking-widest text-gray-200
            hover:bg-white/20 hover:scale-105
            transition
          "
                >
                    <span>Back to top</span>
                    <HiArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform" />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
