import React from "react";

const AboutMe = () => {
  return (
    <section id="about">
      <div  className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-10">
          <span className="text-purple-500">About Me</span>
        </h1>

        <div className="text-lg sm:text-xl text-gray-200 leading-relaxed">
          <p className="mb-6">
            I have always envisioned my future at the intersection of technology and logic. 
            My journey in software engineering is fueled by a blend of analytical rigor, 
            high accountability, and creative problem-solving. I approach every development 
            challenge as an exploration of ideas—where precision meets efficiency.
          </p>

          <p className="mb-6">
            I am a firm believer in <strong>intentional engineering</strong>: every line of code 
            must serve a purpose, and every function should contribute to an optimal user experience. 
            My mindset is inherently proactive; I don’t just resolve existing bugs—I anticipate 
            future challenges before they arise.
          </p>

          <p>
            Driven by the philosophy, <span className="italic text-purple-400">"Don't stop because you're tired, stop because you made it!"</span> 
            I bring a high level of organization and time management to every sprint. 
            I am now looking to bring my curiosity and commitment to technical excellence 
            to a forward-thinking team.
          </p>
        </div>
      </div>
      </section>
  );
};

export default AboutMe;