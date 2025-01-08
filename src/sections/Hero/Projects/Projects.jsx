import styles from './ProjectsStyles.module.css';
import viberr from '../../../assets/viberr.png';
import ProjectCard from '../../../common/ProjectCard';
import freshBurger from '../../../assets/fresh-burger.png' ;
import hipsster from '../../../assets/hipsster.png' ;
import netflix from '../../../assets/netflix.png' ;
import weather from '../../../assets/weather.jpeg' ;
import ankit from '../../../assets/ankit.png' ;
import mode from '../../../assets/mode.png' ;
import bid from '../../../assets/bid.jpg' ;
import bot2 from '../../../assets/bot2.jpg';

function Projects() {
  return (<section id='projects' className={styles.container}>
  <h1 className='sectionTitle'>Projects</h1>
  <div className={styles.projectsContainer}>

    {/* my project 1 */}

    <ProjectCard 
    src={bot2} 
    link='https://t.me/AdvChatGptbot' 
    h3='Advance ChatGpt Bot' 
    p="Telegram bot"/>

    <ProjectCard src={netflix} 
    link='https://ghjhzv.csb.app/' 
    h3='Netflix Clone' 
    p="Streaming App"/>

{/* my project 2 */}
    <ProjectCard 
    src={weather} 
    link='https://yvwfnm.csb.app/' 
    h3='Open Weather ' 
    p="Weather Forecasting App "/>

{/* my project 3 */}
    <ProjectCard 
    src={ankit} 
    link='https://ankit-portfolio-rosy.vercel.app/' 
    h3='Portfolio ' 
    p="Personal Website"/>

    {/* project 4 */}
    <ProjectCard 
    src={mode} 
    link='https://grl8h7.csb.app/' 
    h3='Modern Calculator' 
    p="Calculation App"/>

<ProjectCard 
    src={bid} 
    link='https://jqcfc2.csb.app/' 
    h3='Auction Platform' 
    p="Bidding App"/>



    {/* more to be added here */}
  </div>
  </section>
  );
}

export default Projects
