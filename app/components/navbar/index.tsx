import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function Navbar() {
    return(
        <div className={styles.container}>
        <div className={styles.toplevel}>
          <Link href="/">
            <Image src={""} alt="navlogo teste" className={styles.logoImg} />
          </Link>
          <nav className={styles.navbar}>
            <div className={styles.navleft}>
              <Link href="/" className={styles.navLink}>
                <HomeIcon />
                <span>Início</span>
              </Link>
  
              <Link href="/about" className={styles.navLink}>
                <PersonOutlineOutlinedIcon />
                <span>Quem somos</span>
              </Link>
            </div>
  
            <div className={styles.navright}>
              <p>Login/</p>
              <p>Register</p>
            </div>
          </nav>
        </div>
      </div>
    )
}
