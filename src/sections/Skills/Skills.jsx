import styles from "./Skills.modules.css";
import checkMarkIcon from '../../assets/checkmark-light.svg'
function Skills() {
  return( 
    <section id="skills" className={styles.container}>
        <h1>SKills</h1>
        <div className={styles.skillList}>
            <span>
                <img src={checkMarkIcon} alt="" />
            </span>
        </div>
    </section>
  )
}

export default Skills;
