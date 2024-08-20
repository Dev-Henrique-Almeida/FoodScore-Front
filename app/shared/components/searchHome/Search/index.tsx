import React from 'react';
import styles from './search.module.scss';

export default function Search() {
  return (
    <div className={styles.searchSection}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Pesquise aqui seu restaurante!"
      />
    </div>
  );
}
