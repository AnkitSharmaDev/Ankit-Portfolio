import React, { useState, useEffect } from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './NavbarStyles.module.css';
import favicon from '../../../public/favicon.ico';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          {/* Logo/Name */}
          <div className={styles.logo}>
            <span>
                {/* AS */}
                <img src={favicon}></img>
                </span>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopMenu}>
            <a href="#hero" className={styles.navLink}>Home</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#experiences" className={styles.navLink}>Experiences</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </div>

          {/* Mobile menu button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={styles.srOnly}>Open main menu</span>
            {!isOpen ? (
              <svg
                className={styles.menuIcon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className={styles.menuIcon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
          <a href="#hero" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Home</a>
          <a href="#projects" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experiences" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Experiences</a>
          <a href="#contact" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;