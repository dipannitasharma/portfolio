import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Hello from "./components/Hello";
import Page1 from "./pages/Page1";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  // lock scroll during intro
  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showIntro]);

  return (
    <>
      {/* MAIN APP — ALWAYS MOUNTED */}
      <div className="relative w-full">
        
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* INTRO OVERLAY */}
      <AnimatePresence>
        {showIntro && (
          <Hello key="hello" onFinish={() => setShowIntro(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
