import React from 'react'
import styles from '../login/login.module.scss'

export default function register(){
  return (
    <div className={styles.topLevel}>
      <div className={styles.container}>
        <h1 className={styles.title}>Registro</h1>
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input type="text" id="name" name="name" required className={styles.input} />
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input type="email" id="email" name="email" required className={styles.input} />
          </div>
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>Password:</label>
            <input type="password" id="password" name="password" required className={styles.input} />
          </div>
          <button type="submit" className={styles.buttonSubmmit}>Login</button>
        </form>
      </div>
    </div>
  )
}
