import React, { useEffect, useState } from "react"
import FocusTrap from "focus-trap-react";
import styles from "/styles/splash.module.css"

const ESCAPE_KEYS = ['27', 'Escape'];

const Splash = () => {
  const [open, setOpen] = useState(true);
  const closeModal = () => {
    setOpen(false);
  };

  // close modal when escape key is pressed
  const handler = ({ key }) => {
    if (ESCAPE_KEYS.includes(String(key))) {
      closeModal();
    }
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  // event listeners for escape key
  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    }
  });

  return open ? <FocusTrap active={open}>
    <div aria-modal="true" className={styles.modalBackground}>
      <div className={styles.modalMask} onClick={closeModal} />
      <div className={styles.foregroundWrapper}>
        <button className={styles.closeBtn} onClick={closeModal} aria-label="Modal Close Button">x</button>
        <h1>Welcome to CLITSPLASH</h1>
        <button onClick={closeModal} aria-label="Modal Close Button">Click here to enter.</button>
      </div>
    </div>
  </FocusTrap> : null
}

export default Splash