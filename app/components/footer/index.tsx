import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <img src="/logo.png" alt="restaurant logo" className={styles.logo} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. 
            <a href="#"> Learn more</a>
          </p>
        </div>
        <div className={styles.rightSection}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <a href="#"><img src="/facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="/instagram-icon.png" alt="Instagram" /></a>
            <a href="#"><img src="/twitter-icon.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>© 2024 Reviews. All Right Reserved. Designed by <strong>Tiago</strong></p>
        <nav className={styles.navFooter}>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}
