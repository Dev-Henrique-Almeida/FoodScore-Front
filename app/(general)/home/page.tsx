"use client";
import styles from "./home.module.scss";
import ConstructionIcon from "@mui/icons-material/Construction";

export default function Home() {
  return (
    <div className={styles.topLevel}>
      <div className={styles.container}>
        <h1>Bem vindo ao Food-Score</h1>
        <p>A espera de um FIGMA para continuidades </p>
        <ConstructionIcon />
      </div>
    </div>
  );
}
