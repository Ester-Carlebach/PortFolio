import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation('about');

  return (
    <section id="about">
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-10" style={{ textAlign: 'center' }}>
          <span className="text-purple-500" style={{ textAlign: 'center' }}>{t('title')}</span>
        </h1>

        <div className="text-lg sm:text-xl text-gray-200 leading-relaxed">
          <p className="mb-6">
            {t('paragraph1')}
          </p>

          <p className="mb-6">
            {t('paragraph2')}
          </p>

          <p>
            {t('paragraph3')}
          </p>
        </div>
      </div>
      </section>
  );
};

export default AboutMe;
