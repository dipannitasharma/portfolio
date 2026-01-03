import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const sections = ["home", "about", "skills", "project", "contact"];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [hidden, setHidden] = useState(false);

    const isHome = active === "home";

    /* ---------- ACTIVE SECTION DETECTION ---------- */
    useEffect(() => {
        const onScroll = () => {
            // force home when near top (prevents flicker)
            if (window.scrollY < 50) {
                setActive("home");
                return;
            }

            const scrollY = window.scrollY + 120;

            for (let id of sections) {
                const el = document.getElementById(id);
                if (!el) continue;

                const top = el.offsetTop;
                const height = el.offsetHeight;

                if (scrollY >= top && scrollY < top + height) {
                    setActive(id);
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* ---------- HIDE / SHOW ON SCROLL (HOME ONLY) ---------- */
    useEffect(() => {
        let lastScroll = window.scrollY;

        const handleScroll = () => {
            if (!isHome) return;

            const current = window.scrollY;
            setHidden(current > lastScroll && current > 80);
            lastScroll = current;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    const links = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#project" },
        { label: "Contact", href: "#contact" },
    ];

    const handleClick = (href) => {
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <header
            className={`
        ${isHome ? "fixed top-0" : "absolute top-0"}
        left-0 w-full z-50
        transition-transform duration-300
        ${hidden && isHome ? "-translate-y-full" : "translate-y-0"}
      `}
        >
            <div className="pt-6 px-4">

                {/* ===== DESKTOP NAV ===== */}
                <div className="hidden md:flex justify-center">
                    <nav className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-8 py-4 shadow-lg">
                        <ul className="flex items-center gap-14 text-white">
                            {links.map((link) => {
                                const id = link.href.replace("#", "");
                                const isActive = active === id;

                                return (
                                    <li key={link.label}>
                                        <button
                                            onClick={() => handleClick(link.href)}
                                            className={`
                        relative text-lg transition
                        ${isActive ? "text-[#FFD41D]" : "hover:text-[#FFD41D]"}
                      `}
                                        >
                                            {link.label}
                                            {isActive && (
                                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FFD41D]/60 rounded-full" />
                                            )}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

                {/* ===== MOBILE NAV ===== */}
                <div className="md:hidden flex justify-end">
                    <div className="relative">

                        {/* Hamburger */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="
                w-12 h-12 flex items-center justify-center
                rounded-full backdrop-blur-md bg-white/10
                border border-white/20 shadow-lg
                text-white text-2xl transition
                hover:scale-105
              "
                        >
                            {open ? <HiX /> : <HiMenu />}
                        </button>

                        {/* Dropdown */}
                        <div
                            className={`
                absolute right-0 mt-3 w-40
                backdrop-blur-md bg-white/10
                border border-white/20 rounded-2xl
                shadow-xl overflow-hidden
                transition-all duration-300 ease-out
                ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
              `}
                        >
                            <ul className="flex flex-col py-2 text-white text-center">
                                {links.map((link) => {
                                    const id = link.href.replace("#", "");
                                    const isActive = active === id;

                                    return (
                                        <li key={link.label}>
                                            <button
                                                onClick={() => handleClick(link.href)}
                                                className={`
                          w-full px-4 py-2 text-lg transition
                          ${isActive ? "text-[#FFD41D]" : "hover:text-[#FFD41D]"}
                        `}
                                            >
                                                {link.label}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </header>
    );
};

export default Navbar;
