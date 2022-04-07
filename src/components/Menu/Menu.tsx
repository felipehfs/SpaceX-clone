import styles from "./Menu.module.scss";
import { FiMenu} from "react-icons/fi"

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <h1>SpaceX</h1>
      <ul className={styles.pages}>
        <li>
          <a className={styles.menuLink} href="#">
            Falcon 9
          </a>
        </li>
        <li>
          <a className={styles.menuLink} href="#">
            Falcon Heavy
          </a>
        </li>
        <li>
          <a className={styles.menuLink} href="#">
            Dragon
          </a>
        </li>
        <li>
          <a className={styles.menuLink} href="#">
            Starship
          </a>
        </li>
        <li>
          <a className={styles.menuLink} href="#">
            Human spaceflight
          </a>
        </li>
        <li>
          <a className={styles.menuLink} href="#">
            Rideshare
          </a>
        </li>
      </ul>
      <a className={styles.menuMobile}>
        <FiMenu />
      </a>
    </nav>
  );
}
