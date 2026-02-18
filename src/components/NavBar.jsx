import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  // מעקב אחרי גלילה לשינוי עיצוב ה-Navbar
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <div className="logo-wrapper">
          <img src="/images/gif.gif" alt="logo" className="logogif" />
          <a href="#hero" className="logo">
            Ester Carlebach
          </a>
        </div>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => {
              const isResume = link.toLowerCase().endsWith('.pdf');

              return (
                <li key={name} className="group">
                  <a 
                    href={link}
                    target={isResume ? "_blank" : "_self"}
                    rel={isResume ? "noopener noreferrer" : undefined}
                  >
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;