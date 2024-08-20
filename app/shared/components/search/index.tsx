import React from "react";
import styles from "./search.module.scss";

interface SearchProps {
  onSearchChange: (searchTerm: string) => void;
}

export default function Search({ onSearchChange }: SearchProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className={styles.searchSection}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Pesquise aqui seu restaurante!"
        onChange={handleInputChange}
      />
    </div>
  );
}
