import styles from "./Hero.module.css"
import heroimg from "../../assets/heroimg.jpg"
import themeicon from "../../assets/sun.svg"
import twitterIcon from "../../assets/twitter-light.svg"
import linkedinIcon from "../../assets/linkedin-light.svg"
import githubIcon from "../../assets/github-light.svg"
import cv from "../../assets/Ravi_Raushan.pdf"
import { useTheme } from "../../common/themeContext.jsx"

function Hero() {
    const {theme, toggleTheme}= useTheme();
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.Hero} src={heroimg} alt="Profile Picture" />
            <img className={styles.colorMode} src={themeicon} alt="Color Mode Icon" />
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
            <p>With a passion for developing java web apps from commercial businesses.</p>
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