import styles from "./Hero.module.css"
import heroimg from "../../assets/heroimg.jpg"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import twitterLight from "../../assets/twitter-light.svg"
import twitterDark from "../../assets/twitter-dark.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import cv from "../../assets/Ravi_Raushan.pdf"
import { useTheme } from "../../common/themeContext.jsx"

function Hero() {
    const {theme, toggleTheme }= useTheme();

    const themeicon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroimg} alt="Profile Picture" />
            <img className={styles.colorMode} src={themeicon} alt="Color Mode Icon" 
            onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>Ravi <br />Raushan</h1>
            <h2>Java Developer</h2>
            <span>
                <a href="https://twitter.com/" target="_blank">
                    <img src={twitterIcon} alt="twitter Icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/" target="_blank">
                    <img src={githubIcon} alt="Github Icon" />
                </a>
            </span>
            <p className={styles.description}>With a passion for developing mordern java web apps from commercial businesses.</p>
            <a href={cv} download>
                <button className="hover" >
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero