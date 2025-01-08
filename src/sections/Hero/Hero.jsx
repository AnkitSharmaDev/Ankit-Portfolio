  import styles from './HeroStyles.module.css';
  import heroImg from '../../assets/Design uten navn.png';
  import sun from '../../assets/sun.svg';
  import moon from '../../assets/moon.svg';
  import twitterLight from '../../assets/twitter-light.svg';
  import twitterDark from '../../assets/twitter-dark.svg';
  import githubLight from '../../assets/github-light.svg';
  import githubDark from '../../assets/github-dark.svg';
  import linkedinLight from '../../assets/linkedin-light.svg';
  import linkedinDark from '../../assets/linkedin-dark.svg';
  import AnkitResume from '../../assets/AnkitResume.pdf';
  import { useTheme } from '../../common/ThemeContext';
  import React, { useState, useEffect } from 'react';
  import Navbar from './Navbar';

 

  function TypewriterText() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100); // Faster initial speed
  
    const textArray = ["Aspiring Software Engineer", "Web Developer","Creative Designer", "Problem Solver"];
    const period = 1000; // Shorter pause between phrases
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, typingSpeed);
  
      return () => { clearInterval(ticker) };
    }, [text])

  const tick = () => {
    let i = loopNum % textArray.length;
    let fullText = textArray[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  }

  return (
    <h2 className={styles.typewriter}>
      <span className={styles.textWrapper}>
        {text}
        <span className={styles.cursor}>|</span>
      </span>
    </h2>
  );
}

  
  function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
      <>
       <Navbar/>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Ankit Sharma"
          />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
            // onhover ={"change theeme"}
          />
        </div>
        <div className={styles.info}>
          <h1>
            Ankit
            <br />
            Sharma
          </h1>
           
          <TypewriterText /> 
          {/* <h2>Aspiring Software Developer</h2> */}
          <span>
            <a href="https://twitter.com/Ankit9022086162" target="_blank">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/AnkitSharmaDev" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/ankitsharama/" target="_blank">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </span>
          <p className={styles.description}>
            A passionate software developer specializing in modern web applications.Creating innovative and efficient solutions.
          </p>
          <a href={AnkitResume} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
      </>
    );
  }

  export default Hero;
