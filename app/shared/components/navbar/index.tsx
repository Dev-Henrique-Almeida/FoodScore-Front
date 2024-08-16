import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/icons/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import { useAuthContext } from "@/app/shared/contexts/Auth/AuthContext";

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.toplevel}>
        <Link href="/home">
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
            {user ? (
              <p>{user.name}</p>
            ) : (
              <Link href="/login">
                <p>Login</p>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
