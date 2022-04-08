import React from 'react';
import TypeAnimation from 'react-type-animation';
import styles from './hero.module.scss';
const Hero = () => {
  return (
    <section id='welcome' className={styles.welcome}>
      <div className={styles.snow}></div>
      <div className={styles['text-box']}>
        <h1>Gurhan Alan</h1>
        <TypeAnimation
          cursor={true}
          sequence={['Frontend Developer', 2000, 'React Developer', 2000]}
          wrapper='p'
          repeat={Infinity}
        />
        {/* <p>Frontend Developer</p> */}
        <p className={styles.small}>and also,</p>
        <div className={styles.title}>
          <div className={styles.title__wrapper}>
            <div className={styles.title__item}>Captain</div>
            <div className={styles.title__item}>Pilot</div>
            <div className={styles.title__item}>Ex-Officer </div>
            <div className={styles.title__item}>Project Manager</div>
            <div className={styles.title__item}>Arg. Tango Instructor</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
