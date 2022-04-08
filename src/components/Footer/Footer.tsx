import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>spaceX &copy; 2022</span>
        <a href="#" className={styles.link}>Twitter</a>
        <a href="#" className={styles.link}>Youtube</a>
        <a href="#" className={styles.link}>Instagram</a>
        <a href="#" className={styles.link}>Flickr</a>
        <a href="#" className={styles.link}>Linkedin</a>
        <a href="#" className={styles.link}>Privacy policy</a>
      </p>
    </footer>
  );
}
