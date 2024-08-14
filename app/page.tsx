import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "../app/(general)/homepage/page"

export default function Home() {
  return (
    <main className={styles.main}>
      <Homepage/>
    </main>
  );
}
