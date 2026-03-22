import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const getNavLinksConfig = (lang) => [
  { key: "about", link: "#about" },
  {
    key: "resume",
    link: lang === 'he'
      ? "/Ester Carlebach-FullStack Developer.pdf"
      : "/Ester Carlebach.pdf"
  },
  { key: "experience", link: "#experience" },
  { key: "skills", link: "#skills" },
  { key: "contact", link: "#contact" },
];

const NavBar = () => {
  const { t, i18n } = useTranslation('navigation');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLanguage = (lang) => {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
      const url = new URL(window.location);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url);
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <div className="logo-wrapper">
          {i18n.language === 'he' ? (
            <>
              <a href="#hero" className="logo">
                {t('name')}
              </a>
              <img src="/images/gif.gif" alt="logo" className="logogif" />
            </>
          ) : (
            <>
              <img src="/images/gif.gif" alt="logo" className="logogif" />
              <a href="#hero" className="logo">
                {t('name')}
              </a>
            </>
          )}
        </div>

        <nav className="desktop">
          <ul>
            {getNavLinksConfig(i18n.language).map(({ link, key }) => {
              const isResume = link.toLowerCase().endsWith('.pdf');

              return (
                <li key={key} className="group">
                  <a
                    href={link}
                    target={isResume ? "_blank" : "_self"}
                    rel={isResume ? "noopener noreferrer" : undefined}
                  >
                    <span>{t(key)}</span>
                    <span className="underline" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="ml-6 flex items-center bg-gray-800/50 rounded-full p-1 border border-gray-700">
            <button
              onClick={() => switchLanguage('en')}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                i18n.language === 'en'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => switchLanguage('he')}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                i18n.language === 'he'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label="Switch to Hebrew"
            >
              עב
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;