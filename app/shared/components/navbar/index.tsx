import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/icons/logo_transparent.png";
import HomeIcon from "@mui/icons-material/Home";
import { useAuthContext } from "@/app/shared/contexts/Auth/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, setUser, setToken } = useAuthContext();
  const router = useRouter();

  const handleLogout = () => {
    const confirmed = window.confirm("Você realmente deseja sair?");

    if (confirmed) {
      setUser(null);
      setToken(null);
      localStorage.clear();
      router.push("/login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.toplevel}>
        <Link href="/home">
          <Image src={Logo} alt="navLogo" className={styles.logoImg} />
        </Link>
        <nav className={styles.navbar}>
          <div className={styles.navleft}>
            {/*  <Link href="/" className={styles.navLink}>
              <HomeIcon />
              <span>Início</span>
            </Link> */}
          </div>

          <div className={styles.navright}>
            {user ? (
              <>
                <p>{user.name}</p>
                <button onClick={handleLogout} className={styles.logoutButton}>
                  Sair
                </button>
              </>
            ) : (
              <Link href="/login" className={styles.loginLink}>
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
