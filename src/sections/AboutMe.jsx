import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { fadeInUp, staggerFadeInUp } from "../utils/animations";

const AboutMe = () => {
  const { t } = useTranslation('about');
  const titleRef = useRef(null);
  const paragraphsRef = useRef([]);

  useEffect(() => {
    if (titleRef.current) {
      fadeInUp(titleRef.current);
    }

    if (paragraphsRef.current.length > 0) {
      staggerFadeInUp(paragraphsRef.current, 0.15);
    }
  }, []);

  return (
    <section id="about" className="px-4 sm:px-6 py-12 sm:py-20">
      <div className="relative max-w-4xl mx-auto text-center">
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10"
          style={{ textAlign: 'center' }}
        >
          <span className="text-purple-500" style={{ textAlign: 'center' }}>{t('title')}</span>
        </h1>

        <div className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
          <p
            ref={(el) => (paragraphsRef.current[0] = el)}
            className="mb-6"
          >
            {t('paragraph1')}
          </p>

          <p
            ref={(el) => (paragraphsRef.current[1] = el)}
            className="mb-6"
          >
            {t('paragraph2')}
          </p>

          <p ref={(el) => (paragraphsRef.current[2] = el)}>
            {t('paragraph3')}
          </p>
        </div>
      </div>
      </section>
  );
};

export default AboutMe;
