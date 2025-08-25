import styles from "./Skills.module.css";
import { useTheme } from "../../common/themeContext.jsx"
import lightCheckMarkIcon from "../../assets/checkmark-light.svg"
import darkCheckMarkIcon from "../../assets/checkmark-dark.svg"
import SkillList  from "../../common/SkillList";
function Skills() {
    const {theme,toggleTheme}=useTheme();
    const themeicon=theme==='light'?lightCheckMarkIcon:darkCheckMarkIcon;
  return( 
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">SKills</h1>
        <div className={styles.skillList}>
            <SkillList src={themeicon}
            skill="HTML"/>
            <SkillList src={themeicon}
            skill="CSS"/>
            <SkillList src={themeicon}
            skill="JavaScript"/>
            <SkillList src={themeicon}
            skill="Java"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={themeicon}
            skill="Flutter"/>
            <SkillList src={themeicon}
            skill="React JS"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={themeicon}
            skill="Git"/>
            <SkillList src={themeicon}
            skill="Redux"/>
            <SkillList src={themeicon}
            skill="AWS"/>
            <SkillList src={themeicon}
            skill="Figma"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={themeicon}
            skill="SQL"/>
            <SkillList src={themeicon}
            skill="PostreSQL"/>
            <SkillList src={themeicon}
            skill="MongoDB"/>
        </div>

    </section>
  )
}

export default Skills;
