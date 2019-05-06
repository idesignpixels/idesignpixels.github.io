import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import styles from './Footer.module.scss';


const Footer = ({ className }) => (
  <footer className={[styles.footer, className].join(' ')}>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.about}>
          <p>idesignpixels is a creative web development blog that shares ideas, helpful resources, tips and tricks on front end dev and design.</p>
        </div>
        <div className={styles.contact}>
          <Button label="contact" to="/contact" />
        </div>
        <div className={styles.social}>
          <a href="https://www.facebook.com/idesignpixels" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
          <a href="https://github.com/idesignpixels" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a>
          <a href="https://instagram.com/idesignpixels" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          <a href="https://www.linkedin.com/in/idesignpixels" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          <a href="https://www.twitter.com/idesignpixels" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        </div>
        <div className={styles.copyright}>
          ©
          &nbsp;
          {new Date().getFullYear()}
          &nbsp;idesignpixels
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;