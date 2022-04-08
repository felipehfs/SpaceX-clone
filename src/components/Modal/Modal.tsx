import ReactModal from "react-modal";
import styles from "./Modal.module.scss";
import { MdClose } from "react-icons/md";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

ReactModal.setAppElement("#modal");

export default function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <ReactModal
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
    >
      <header className={styles.header}>
        <h3>SpaceX</h3>
        <button onClick={onClose} className={styles.closeButton}>
          <MdClose />
        </button>
      </header>
      <ul className={styles.menu}>
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
    </ReactModal>
  );
}
