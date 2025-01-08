// Experiences.jsx
import React from 'react';
import styles from './ExperiencesStyles.module.css';
import int1 from '../../assets/int1.jpeg';
import int2 from '../../assets/int2.jpeg';
import { useTheme } from '../../common/ThemeContext';
const Experiences = () => {
    const { theme, toggleTheme } = useTheme();
    const experiences = [
      {
        title: "Software Engineering Fellow",
        company: "HeadStarter AI",
        logo: int2,
        period: "Jul 2024 - Present",
        description: "Created responsive websites for small businesses. Collaborating with senior developers on large-scale projects.",
        skills: ["React", "Node.js", "Python", "Git", "Leadership"]
      },
      {
        title: "Web Developer Intern",
        company: "Tech-A-Intern",
        logo: int1,
        period: "Jul 2024 - Aug 2024",
        description: "Developing and maintaining web applications using React and Node.js. Implemented modern design principles and optimized for performance.",
        skills: ["HTML/CSS", "JavaScript", "WordPress", "SEO"]
      } 
    ];
  
    return (
      <section id="experiences" className={styles.experiencesSection}>
        <h2>EXPERIENCES</h2>
        <div className={styles.experiencesContainer}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceItem}>
              <div className={styles.logoContainer}>
                <img src={exp.logo} alt={`${exp.company} logo`} className={styles.logo} />
              </div>
              <div className={styles.content}>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className={styles.period}>{exp.period}</p>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.skills}>
                  {exp.skills.map((skill, i) => (
                    <span key={i} className={styles.skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experiences;