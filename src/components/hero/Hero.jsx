import React from 'react';
import TypeAnimation from 'react-type-animation';
import styles from './hero.module.scss';
const Hero = () => {
  return (
    <section id='welcome' className={styles.welcome}>
      <div className={styles.snow}></div>
      <div className={styles['text-box']}>
        <h1>Alan</h1>

        
        </div>
      </div>
    </section>
  );
};

export default Hero;
