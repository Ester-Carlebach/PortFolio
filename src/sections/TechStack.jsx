import React from 'react';
import { skillCategories } from "../constants";
import TitleHeader from '../components/TitleHeader';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <TitleHeader
            title="Technical Toolkit"
            sub="A comprehensive overview of the languages, frameworks, and tools I use to bring complex ideas to life."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-[#161031]/40 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:shadow-[0_0_8px_#a855f7]"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 text-sm font-medium hover:bg-purple-500/10 hover:text-purple-400 hover:border-purple-500/50 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;