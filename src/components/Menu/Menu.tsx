import styles from "./Menu.module.scss";
import { FiMenu } from "react-icons/fi";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
        <button onClick={() => setOpen(true)} className={styles.menuMobile}>
          <FiMenu />
        </button>
      </nav>
      <Modal onClose={() => setOpen(false)} isOpen={open} />
    </>
  );
}
