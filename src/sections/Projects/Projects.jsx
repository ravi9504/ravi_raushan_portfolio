import React from 'react'
import styles from './Projects.module.css';
import ProjectCard from '../../common/ProjectCard';
import jobportal from '../../assets/job-portal.jpeg'
import fitlift from '../../assets/fitlift.png'
import Portfolio from  '../../../public/favicon.png'
import wallpaper from '../../assets/wallpaper.jpeg'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={Portfolio}
            link="https://github.com/ravi9504/ravi_raushan_portfolio"
            h3="Portfolio"
            p="Personal Website"
            />
            <ProjectCard src={jobportal}
            link=""
            h3="Job Portal"
            p="Search Jobs or Developers"
            />
            <ProjectCard src={fitlift}
            link=""
            h3="GymBro"
            p="Be Healthy Be Happy"
            />
            <ProjectCard src={wallpaper}
            link=""
            h3="Wallpaper App"
            p="Eyecatching 4K Wallpaper"
            />
        </div>
    </section>
  )
}

export default Projects