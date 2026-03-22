import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { skillCategories } from "../constants";
import TitleHeader from '../components/TitleHeader';
import { fadeInUp, staggerFadeInUp } from '../utils/animations';

const Skills = () => {
  const { t } = useTranslation('skills');
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (headerRef.current) {
      fadeInUp(headerRef.current);
    }

    if (cardsRef.current.length > 0) {
      staggerFadeInUp(cardsRef.current, 0.12);
    }
  }, []);

  return (
    <section id="skills" className="py-12 sm:py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="text-center mb-10 sm:mb-16">
          <TitleHeader
            title={t('title')}
            sub={t('subtitle')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-[#161031]/40 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:shadow-[0_0_8px_#a855f7]"></span>
                {t(`categories.${category.title.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}`)}
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