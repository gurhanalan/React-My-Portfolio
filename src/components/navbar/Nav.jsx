import React from "react";
import styles from "./nav.module.scss";

const Nav = () => {
    return (
        <nav id="navbar" className={styles.navbar}>
            <h1>G.A</h1>
            <div className={styles["nav-links"]}>
                <a href="#welcome" className={styles["nav-link"]}>
                    About
                </a>
                <a href="#projects" className={styles["nav-link"]}>
                    Work
                </a>
                <a href="#contact" className={styles["nav-link"]}>
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Nav;
