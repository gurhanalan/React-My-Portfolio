import React from 'react';
import styles from './footer.module.scss';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer id='contact' className={styles.contact}>
      <a
        href='https://github.com/gurhanalan'
        class={styles['contact__links']}
        target='_blank'
        id='profile-link'
        rel='noreferrer'
      >
        <Icon icon='akar-icons:github-fill' className={styles.iconify} />
        GitHub
      </a>
      <a
        href='https://www.linkedin.com/in/gurhan-alan-08711767/'
        class={styles['contact__links']}
        target='_blank'
        rel='noreferrer'
      >
        <Icon icon='akar-icons:linkedin-fill' className={styles.iconify} />
        LinkedIn
      </a>
      <a
        href='https://www.codewars.com/users/gurhanalan'
        class={styles['contact__links']}
        target='_blank'
        rel='noreferrer'
      >
        <Icon icon='simple-icons:codewars' className={styles.iconify} />
        CodeWars
      </a>
      <a
        href='https://www.freecodecamp.org/gurhanalan'
        class={styles['contact__links']}
        target='_blank'
        rel='noreferrer'
      >
        <Icon icon='simple-icons:freecodecamp' className={styles.iconify} />
        freeCodeCamp
      </a>
      <a
        href='https://codepen.io/gurhanalan'
        class={styles['contact__links']}
        target='_blank'
        rel='noreferrer'
      >
        <Icon icon='akar-icons:codepen-fill' className={styles.iconify} />
        CodePen
      </a>
    </footer>
  );
};

export default Footer;
