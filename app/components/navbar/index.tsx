import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/icons/logo.png";
import HomeIcon from "@mui/icons-material/Home";

export default function Navbar() {
    return(
        <div className={styles.container}>
        <div className={styles.toplevel}>
          <Link href="/">
            <Image src={Logo} alt="navLogo" className={styles.logoImg} />
          </Link>
          <nav className={styles.navbar}>
            <div className={styles.navleft}>
              <Link href="/" className={styles.navLink}>
                <HomeIcon />
                <span>Início</span>
              </Link>
            </div>
  
            <div className={styles.navright}>
              <p>Login/</p>
            </div>
          </nav>
        </div>
      </div>
    )
}
