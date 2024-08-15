"use client";

import React, { useState } from "react";
import axios from "axios";
import styles from "./login.module.scss";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      console.log(response.data);
      // Handle successful login
    } catch (err) {
      setError("Login falhou. Por favor, tente novamente.");
    }
  };
  return (
    <div className={styles.topLevel}>
      <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="Senha" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              required
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.buttonSubmmit}>
            Login
          </button>
          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.inputGroup}>
            <div className={styles.lostPass}>
              <span>Esqueci minha senha</span>
            </div>

            <div className={styles.register}>
              <Link href="/register" className={styles.regiterLink}>Registre-se</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
