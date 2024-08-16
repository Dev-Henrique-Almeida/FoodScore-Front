"use client";
import styles from "./home.module.scss";
import ConstructionIcon from "@mui/icons-material/Construction";
import { useAuthContext } from "@/app/shared/contexts/Auth/AuthContext";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className={styles.topLevel}>
      <div className={styles.container}>
        <h1>Bem vindo ao Food-Score</h1>
        <p>{user!.name}</p>
        <p>A espera de um FIGMA para continuidades </p>
        <ConstructionIcon />
      </div>
    </div>
  );
}
