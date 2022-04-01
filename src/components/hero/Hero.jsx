import React from "react";
import styles from "./hero.module.scss";
const Hero = () => {
    return (
        <section id="welcome-section" className={styles.welcome}>
            <div className={styles.snow}></div>
            <div className={styles["text-box"]}>
                <h1>Gurhan Alan</h1>
                <p>Frontend Developer</p>
            </div>
        </section>
    );
};

export default Hero;
