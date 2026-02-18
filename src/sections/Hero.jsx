import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-transparent text-white px-6 py-20 lg:py-32">
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-purple-500">Ester Carlebach</span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-200">
          Full-stack Developer with a passion for technology and high-level logical reasoning.
        </p>
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
          A Software Engineering honors graduate with a sharp analytical mindset and a deep passion for solving complex logical challenges. As a fast-learning autodidact, I have a proven track record of quickly mastering legacy codebases and seamlessly integrating into development teams.
        </p>
      </div>

      <div className="w-full flex justify-center mt-20 gap-4">
        <a
          href="/Ester Carlebach-FullStack Developer.pdf"
          download
          className="relative flex items-center gap-3 px-12 py-5 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 overflow-hidden group shadow-lg shadow-purple-500/20"
          style={{ background: "linear-gradient(135deg, #0b1026 0%, #1e1b4b 40%, #6d28d9 100%)" }}
        >
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-transform duration-700 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.2),transparent_70%)] -translate-x-full group-hover:translate-x-full" />
          <span className="z-10">Download Resume</span>
        </a>

        <a 
          href="#contact"
          className="relative flex items-center gap-3 px-12 py-5 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 overflow-hidden group shadow-lg shadow-blue-500/20"
          style={{ background: "linear-gradient(135deg, #0b1026 0%, #1e1b4b 40%, #6d28d9 100%)" }}
        >
          <span className="z-10">Contact me</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;