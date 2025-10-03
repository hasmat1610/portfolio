"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education & Skills" },
    { id: "works", label: "Works" },
    { id: "contact", label: "Contact" },
  ];

  // Get header height
  useEffect(() => {
    const headerEl = document.getElementById("header");
    if (headerEl) {
      setHeaderHeight(headerEl.offsetHeight);
    }
    const handleResize = () => {
      if (headerEl) setHeaderHeight(headerEl.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll to section with offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -headerHeight;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", window.location.pathname); // remove #id
    }
  };

  // Scroll to top (for logo)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", window.location.pathname);
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop - headerHeight - 100;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = item.id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight]);

  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full z-50 shadow-header bg-white/70 backdrop-blur-[12px]"
      role="banner"
    >
      <div className="py-5 relative">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span
              onClick={scrollToTop}
              className="logo cursor-pointer text-2xl lg:text-3xl font-semibold text-white-color"
            >
              Hasmat Patel
            </span>

            <div className="hero-subtitle-gradient hover:hero-subtitle-hover relative inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium text-white max-md:hidden">
              <div className="relative">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
              </div>
              <span>Available for exciting opportunities</span>
            </div>
            
            </div>

            {/* Desktop navigation */}
            <nav className="hidden xl:block relative" aria-label="Primary">
              <ul className="flex items-center gap-x-6 xl:gap-x-10" role="menubar">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-base cursor-pointer font-medium capitalize py-2 relative z-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white 
                        after:absolute after:left-0 after:bottom-0 after:h-0.5 after:transition-all after:duration-500
                        ${
                          activeSection === item.id
                            ? "text-blue-500 after:w-full after:bg-gradient-primary"
                            : "text-secondary-color dark:text-white-color after:w-0 hover:after:w-full after:bg-gradient-primary"
                        }`}
                      aria-current={activeSection === item.id ? "page" : undefined}
                      role="menuitem"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex flex-col gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`absolute left-0 top-full w-full bg-secondary-color dark:bg-dark-color xl:hidden transition-all duration-300 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
          <div className="container py-5">
            <ul className="flex flex-col gap-y-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`text-2xl uppercase leading-tight py-4 block transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-color ${
                      activeSection === item.id
                        ? "text-primary-color"
                        : "text-white-color hover:text-primary-color"
                    }`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
