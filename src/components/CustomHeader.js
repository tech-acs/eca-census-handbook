import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import SearchBar from '@theme/SearchBar'; // Import the SearchBar for docs pages
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';

// Styles extracted from the original HomePage header
// Global 'body' styles were removed as they should be handled by Docusaurus global styles (e.g., src/css/custom.css)
// The '.header' class was renamed to '.custom-page-header' to avoid potential conflicts and ensure styles are scoped.
const headerStyles = `
  .custom-page-header {
    background: linear-gradient(90deg, #206095, #206095);
    color: white;
    padding: 1rem 0.5rem 1rem 0.5rem;
    position: sticky;
    top: 10px;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(32, 96, 149, 1);
    min-height: 60px;
  }
  

  

  
  .nav-links-and-search {
    display: flex;
    align-items: center;
    gap: 0;
    justify-content: flex-start;
    padding-right: 2rem;
    padding-left: 1rem;
    width: 100%;
    min-height: 60px;
  }
  
  /* Ensure proper navigation alignment on docs pages */
  .nav-links-and-search.with-search {
    margin-left: 0;
    justify-content: flex-start;
  }
  
  /* No margin adjustment needed - filler takes exact search bar position */
  
  .homepage-filler {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    font-weight: 500;
  }
  
  .homepage-filler.search-position {
    margin-left: auto;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  
  .africa-icon {
    font-size: 1.2rem;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
  }
  
  .homepage-tagline {
    white-space: nowrap;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    letter-spacing: 0.3px;
  }
  
  .homepage-filler.mobile {
    margin: 1rem 0 0 0;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    justify-content: center;
    text-align: center;
  }
  
  .nav-links {
    display: flex;
    align-items: center;
    gap: 0;
    flex-shrink: 0;
    min-width: fit-content;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    margin-left: 0;
    margin-right: 0.2rem;
    font-size: 1.0rem;
    transition: all 0.3s ease;
    white-space: nowrap;
    padding: 0.5rem 0.6rem;
    border-radius: 4px;
    position: relative;
  }
  
  .nav-links a:first-child {
    margin-left: 0;
  }
  
  .nav-links a:last-child {
    margin-right: 1rem;
  }
  
  .nav-links a:hover {
    color: #28a745;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .nav-links a.active {
    background-color: rgba(40, 167, 69, 0.2);
    color: #28a745;
    font-weight: 600;
    border-bottom: 2px solid #28a745;
  }
  
  .nav-links a.active:hover {
    background-color: rgba(40, 167, 69, 0.3);
  }
  
  .search-bar-container {
    margin-left: auto;
    margin-right: 0.5rem;
  }
  
  .theme-toggle-container {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin-left: 0.3rem;
  }

  .locale-switcher {
    margin-left: 0.5rem;
    flex-shrink: 0;
  }

  .locale-select {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    color: white;
    padding: 6px 10px;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .locale-select option {
    color: black;
  }
  
  .dark-mode-toggle {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    color: white;
    padding: 8px 12px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    flex-shrink: 0;
    white-space: nowrap;
    min-width: fit-content;
  }
  
  .dark-mode-toggle:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  .dark-mode-toggle.mobile {
    width: 100%;
    justify-content: center;
    margin-top: 0.5rem;
    padding: 10px 16px;
    display: flex;
    align-items: center;
  }
  
  .hamburger-menu {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 5px;
  }
  
  .hamburger-menu span {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 3px 0;
    transition: 0.3s;
  }
  
  .mobile-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #206095;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  
  .mobile-nav.open {
    display: flex;
  }
  
  .mobile-nav a {
    color: white;
    text-decoration: none;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    font-size: 1.0rem;
    display: block;
    transition: all 0.3s ease;
  }
  
  .mobile-nav a:hover {
    color: #28a745;
    background-color: rgba(255,255,255,0.1);
    padding-left: 1rem;
  }
  
  .mobile-nav a.active {
    color: #28a745;
    background-color: rgba(40, 167, 69, 0.2);
    font-weight: 600;
    border-left: 4px solid #28a745;
    padding-left: 1rem;
  }
  
  .mobile-nav a.active:hover {
    background-color: rgba(40, 167, 69, 0.3);
  }
  
  .mobile-nav .search-bar-container {
    margin: 1rem 0 0 0;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,0.2);
  }
  
  /* Dark mode support for theme toggle */
  [data-theme='dark'] .dark-mode-toggle {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  [data-theme='dark'] .dark-mode-toggle:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
  }
  
  /* Custom Algolia elements CSS overrides removed */
  
  .mobile-nav-item {
    position: relative;
  }
  
  .mobile-nav-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .mobile-nav-link .arrow {
    transition: transform 0.3s ease;
    font-size: 1.2rem;
  }
  
  .mobile-nav-link .arrow.expanded {
    transform: rotate(90deg);
  }
  
  .mobile-nav-link.active {
    color: #28a745 !important;
    background-color: rgba(40, 167, 69, 0.2) !important;
    font-weight: 600 !important;
    border-left: 4px solid #28a745 !important;
    padding-left: 1rem !important;
  }
  
  .mobile-submenu {
    display: none;
    background-color: rgba(0,0,0,0.2);
    padding-left: 1rem;
  }
  
  .mobile-submenu.open {
    display: block;
  }
  
  .mobile-submenu a {
    font-size: 0.9rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  
  .mobile-submenu a:hover {
    background-color: rgba(255,255,255,0.05);
    padding-left: 1rem;
  }
  
  @media (max-width: 768px) {
    .custom-page-header {
      position: relative;
      padding: 1rem;
    }
    
    .nav-links-and-search {
      display: none;
    }
    
    .theme-toggle-container .dark-mode-toggle:not(.mobile) {
      display: none;
    }
    
    .hamburger-menu {
      display: flex;
    }

    .locale-switcher {
      width: 100%;
      margin: 0.75rem 0 0 0;
    }

    .locale-select {
      width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    .custom-page-header {
      padding: 0.75rem;
    }
  }
`;

const CustomHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);
  const [colorMode, setColorMode] = useState('light');
  const location = useLocation();
  const { siteConfig, i18n } = useDocusaurusContext();
  const currentLocale = i18n?.currentLocale || 'en';
  const defaultLocale = i18n?.defaultLocale || 'en';
  const locales = i18n?.locales || ['en'];
  const baseUrl = siteConfig?.baseUrl || '/';

  const changeLocale = (newLocale) => {
    if (newLocale === currentLocale) {
      return;
    }

    if (typeof window === 'undefined') {
      return;
    }

    const { pathname, search, hash } = window.location;
    let relativePath = pathname;
    if (baseUrl !== '/' && relativePath.startsWith(baseUrl)) {
      relativePath = relativePath.substring(baseUrl.length - 1); // Keep leading slash
    }

    // Remove current non-default locale prefix from path
    if (currentLocale !== defaultLocale) {
      const currentPrefix = `/${currentLocale}`;
      if (relativePath === currentPrefix) {
        relativePath = '/';
      } else if (relativePath.startsWith(`${currentPrefix}/`)) {
        relativePath = relativePath.substring(currentPrefix.length);
      }
    }

    // Add new non-default locale prefix to path
    if (newLocale !== defaultLocale) {
      if (relativePath === '/') {
        relativePath = `/${newLocale}/`;
      } else {
        relativePath = `/${newLocale}${relativePath}`;
      }
    }

    // Prepend baseUrl (without double slashes)
    const finalPath = baseUrl === '/' ? relativePath : `${baseUrl.replace(/\/$/, '')}${relativePath}`;
    window.location.href = `${finalPath}${search}${hash}`;
  };

  const normalizePath = (path) => {
    let relativePath = path;
    if (baseUrl !== '/' && relativePath.startsWith(baseUrl)) {
      relativePath = relativePath.substring(baseUrl.length - 1); // Keep leading slash
    }
    if (currentLocale !== defaultLocale) {
      const prefix = `/${currentLocale}`;
      if (relativePath === prefix) {
        return '/';
      }
      if (relativePath.startsWith(`${prefix}/`)) {
        return relativePath.substring(prefix.length);
      }
    }
    return relativePath;
  };

  const localizePath = (path) => {
    // Docusaurus Link component automatically handles locale prefixing
    return path;
  };

  const normalizedPathname = normalizePath(location.pathname);

  // Show search only on docs pages to avoid context errors
  const showSearchBar = normalizedPathname.startsWith('/docs');
  // Show theme toggle only on docs pages 
  const showThemeToggle = normalizedPathname.startsWith('/docs');
  
  // Function to determine if a navigation link is active
  const isActiveLink = (linkTo) => {
    const currentPath = normalizedPathname;
    
    // Handle exact home match
    if (linkTo === "/" && currentPath === "/") {
      return true;
    }
    
    // Handle docs sections - check if current path starts with the link path
    if (linkTo !== "/" && currentPath.startsWith(linkTo.replace(/\/$/, ''))) {
      return true;
    }
    
    return false;
  };
  
  // Initialize theme
  React.useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') || 
                      localStorage.getItem('docusaurus.tab.theme') || 
                      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    setColorMode(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Theme toggle function
  const toggleColorMode = () => {
    const newTheme = colorMode === 'dark' ? 'light' : 'dark';
    setColorMode(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('docusaurus.tab.theme', newTheme);
    
    // Dispatch storage event for cross-tab sync
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'theme',
      newValue: newTheme
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setExpandedSubmenu(expandedSubmenu === index ? null : index);
  };

  const handleMobileNavClick = (link, index, e) => {
    if (link.submenu) {
      e.preventDefault();
      toggleSubmenu(index);
    } else {
      closeMobileMenu();
    }
  };

  const navigationLinks = [
    { path: "/", label: <Translate id="nav.home">Home</Translate> },
    { 
      path: "/docs/about-us/", 
      label: <Translate id="nav.about">About</Translate>,
      submenu: [
        { path: "/docs/about-us/Background", label: <Translate id="nav.about.background">Background</Translate> },
        { path: "/docs/about-us/Purpose", label: <Translate id="nav.about.purpose">Purpose</Translate> },
        { path: "/docs/about-us/Rationale", label: <Translate id="nav.about.rationale">Rationale</Translate> },
        { path: "/docs/about-us/Structure", label: <Translate id="nav.about.structure">Structure</Translate> },
        { path: "/docs/about-us/Target%20Audience", label: <Translate id="nav.about.targetAudience">Target Audience</Translate> }
      ]
    },
    { 
      path: "/docs/experiences-lessons-2020/", 
      label: <Translate id="nav.experiences">Experiences and Lessons</Translate>,
      submenu: [
        { path: "/docs/experiences-lessons-2020/Chapter-01/Introduction", label: <Translate id="nav.experiences.chapter1">1. Project Planning and Management</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-02/Introduction", label: <Translate id="nav.experiences.chapter2">2. Geospatial Mapping and EA Database</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-03/Introduction", label: <Translate id="nav.experiences.chapter3">3. Enumeration Instruments and Tools</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-04/Introduction", label: <Translate id="nav.experiences.chapter4">4. Data Capture and Management</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-05/Introduction", label: <Translate id="nav.experiences.chapter5">5. Census Testing and Pilots</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-06/Introduction", label: <Translate id="nav.experiences.chapter6">6. Recruitment and Training</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-07/Introduction", label: <Translate id="nav.experiences.chapter7">7. Deployment and Supervision</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-08/Introduction", label: <Translate id="nav.experiences.chapter8">8. Enumeration and Logistics</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-09/Introduction", label: <Translate id="nav.experiences.chapter9">9. Quality Assurance and Risk Management</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-10/Introduction", label: <Translate id="nav.experiences.chapter10">10. Census Analysis and Products</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-11/Introduction", label: <Translate id="nav.experiences.chapter11">11. Partnerships and Collaboration</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-12/Introduction", label: <Translate id="nav.experiences.chapter12">12. Advocacy and Publicity</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-13/Introduction", label: <Translate id="nav.experiences.chapter13">13. Procurement and Financial Management</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-14/Introduction", label: <Translate id="nav.experiences.chapter14">14. Post-Enumeration Survey</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-15/Introduction", label: <Translate id="nav.experiences.chapter15">15. Alternative Approaches</Translate> },
        { path: "/docs/experiences-lessons-2020/Chapter-16/Introduction", label: <Translate id="nav.experiences.chapter16">16. Planning Checklist</Translate> }
      ]
    },
    { 
      path: "/docs/case-studies/", 
      label: <Translate id="nav.caseStudies">Case Studies</Translate>,
      submenu: [
        { path: "/docs/case-studies/Planning%20&%20Management", label: <Translate id="nav.caseStudies.chapter1">1. Project Planning and Management</Translate> },
        { path: "/docs/case-studies/Geospatial%20Mapping%20and%20EA%20Database%20Management", label: <Translate id="nav.caseStudies.chapter2">2. Geospatial Mapping</Translate> },
        { path: "/docs/case-studies/Enumeration%20Instruments,%20Applications%20and%20Tools", label: <Translate id="nav.caseStudies.chapter3">3. Enumeration Instruments</Translate> },
        { path: "/docs/case-studies/Data%20Capture,%20Transmission%20and%20Management", label: <Translate id="nav.caseStudies.chapter4">4. Data Capture</Translate> },
        { path: "/docs/case-studies/Census%20Testing%20and%20Pilots", label: <Translate id="nav.caseStudies.chapter5">5. Census Testing</Translate> },
        { path: "/docs/case-studies/Recruitment%20and%20Training%20of%20Field%20Personnel", label: <Translate id="nav.caseStudies.chapter6">6. Recruitment and Training</Translate> },
        { path: "/docs/case-studies/Deployment%20and%20Supervision%20of%20Field%20Personnel", label: <Translate id="nav.caseStudies.chapter7">7. Deployment and Supervision</Translate> },
        { path: "/docs/case-studies/Enumeration%20and%20Logistics", label: <Translate id="nav.caseStudies.chapter8">8. Enumeration and Logistics</Translate> },
        { path: "/docs/case-studies/Quality%20Assurance,%20Monitoring,%20Evaluation,%20and%20Risk%20Management", label: <Translate id="nav.caseStudies.chapter9">9. Quality Assurance</Translate> },
        { path: "/docs/case-studies/Census%20Analysis,%20Products,%20Dissemination%20and%20Archiving", label: <Translate id="nav.caseStudies.chapter10">10. Census Analysis</Translate> },
        { path: "/docs/case-studies/Partnerships%20and%20Collaboration", label: <Translate id="nav.caseStudies.chapter11">11. Partnerships</Translate> },
        { path: "/docs/case-studies/Advocacy,%20Publicity%20and%20Resource%20Mobilization", label: <Translate id="nav.caseStudies.chapter12">12. Advocacy</Translate> },
        { path: "/docs/case-studies/Procurement%20and%20Financial%20Management", label: <Translate id="nav.caseStudies.chapter13">13. Procurement</Translate> },
        { path: "/docs/case-studies/Post-Enumeration%20Survey", label: <Translate id="nav.caseStudies.chapter14">14. Post-Enumeration Survey</Translate> },
        { path: "/docs/case-studies/Alternative%20Approaches", label: <Translate id="nav.caseStudies.chapter15">15. Alternative Approaches</Translate> }
      ]
    },
    { path: "/docs/recommendations/", label: <Translate id="nav.recommendations">Recommendations</Translate> },
    { path: "/docs/resources/", label: <Translate id="nav.resources">Resources</Translate> },
    { path: "/docs/checklist/", label: <Translate id="nav.checklist">Checklist</Translate> }
  ];

  return (
    <>
      <style>{headerStyles}</style>
      <div className="custom-page-header">
        {/* Desktop Navigation */}
        <div className={`nav-links-and-search ${showSearchBar ? 'with-search' : ''}`}>
          <div className="nav-links">
            {navigationLinks.map((link, index) => (
              <Link 
                key={index} 
                to={localizePath(link.path)} 
                className={isActiveLink(link.path) ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
                    </div>
          {showSearchBar ? (
            <div className="search-bar-container">
              <SearchBar />
            </div>
          ) : (
            <div className="homepage-filler search-position">
              <span className="africa-icon">🌍</span>
              <span className="homepage-tagline">
                <Translate id="nav.tagline">Digital Census Guide for Africa</Translate>
              </span>
            </div>
          )}
          {locales.length > 1 && (
            <div className="locale-switcher">
              <select
                className="locale-select"
                value={currentLocale}
                onChange={(e) => changeLocale(e.target.value)}
                aria-label="Change language"
              >
                {locales.map((locale) => (
                  <option key={locale} value={locale}>
                    {locale === 'en' ? 'English' : locale === 'fr' ? 'Français' : locale}
                  </option>
                ))}
              </select>
            </div>
          )}
          {showThemeToggle && (
            <div className="theme-toggle-container">
              <button 
                className="dark-mode-toggle"
                onClick={toggleColorMode}
                title={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
              >
                {colorMode === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navigationLinks.map((link, index) => (
            <div key={index} className="mobile-nav-item">
              {link.submenu ? (
                <>
                  <div
                    className={`mobile-nav-link ${isActiveLink(link.path) ? 'active' : ''}`}
                    onClick={(e) => handleMobileNavClick(link, index, e)}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.2)',
                      fontSize: '1.0rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{link.label}</span>
                    <span className={`arrow ${expandedSubmenu === index ? 'expanded' : ''}`}>
                      ▶
                    </span>
                  </div>
                  <div className={`mobile-submenu ${expandedSubmenu === index ? 'open' : ''}`}>
                    {link.submenu.map((sublink, subIndex) => (
                      <Link key={subIndex} to={localizePath(sublink.path)} onClick={closeMobileMenu}>
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  to={localizePath(link.path)} 
                  onClick={closeMobileMenu}
                  className={isActiveLink(link.path) ? 'active' : ''}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          {showSearchBar ? (
            <div className="search-bar-container">
              <SearchBar />
            </div>
          ) : (
            <div className="homepage-filler mobile">
              <span className="africa-icon">🌍</span>
              <span className="homepage-tagline">
                <Translate id="nav.tagline">Digital Census Guide for Africa</Translate>
              </span>
            </div>
          )}
          {locales.length > 1 && (
            <div className="locale-switcher">
              <select
                className="locale-select"
                value={currentLocale}
                onChange={(e) => {
                  changeLocale(e.target.value);
                  closeMobileMenu();
                }}
                aria-label="Change language"
              >
                {locales.map((locale) => (
                  <option key={locale} value={locale}>
                    {locale === 'en' ? 'English' : locale === 'fr' ? 'Français' : locale}
                  </option>
                ))}
              </select>
            </div>
          )}
          {showThemeToggle && (
            <div className="theme-toggle-container">
              <button 
                className="dark-mode-toggle mobile"
                onClick={toggleColorMode}
                title={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
              >
                {colorMode === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomHeader;
