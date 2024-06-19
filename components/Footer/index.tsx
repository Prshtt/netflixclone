import styles from '../../styles/Footer.module.scss';
import { Github, Linkedin, Twitter } from '../../utils/icons';
import { IconType } from 'react-icons';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Made by{' '}
        <a href='https://github.com/ayushiee' target='_blank' rel='noreferrer'>
          <b>Purushottam Gaikwad</b>
        </a>
      </p>
      <div>
        <a href='https://www.linkedin.com/in/purushottam-gaikwad-a14515246/' className={styles.icon} target='_blank' rel='noreferrer'>
          <Linkedin />
        </a>
        <a href='https://x.com/i/flow/login?redirect_after_login=%2FPrshttmgkwde' className={styles.icon} target='_blank' rel='noreferrer'>
          <Twitter />
        </a>
        <a href='https://github.com/Prshtt' className={styles.icon} target='_blank' rel='noreferrer'>
          <Github />
        </a>
      </div>
    </div>
  );
}
