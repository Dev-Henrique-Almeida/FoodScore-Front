"use client";

import React, { useState } from "react";
import axios from "axios";
import styles from "../login/login.module.scss";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/users", {
        name,
        email,
        password,
      });

      setSuccess("Registro realizado com sucesso!");
      if (response.status === 201) {
        console.log(response.data);
        const { name, token } = response.data;
      }
    } catch (err) {
      setError("O registro falhou. Por favor, tente novamente.");
      setSuccess("");
    }
  };

  return (
    <div className={styles.topLevel}>
      <div className={styles.container}>
        <h1 className={styles.title}>Registro</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              required
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>
              Senha:
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
            Registrar
          </button>

          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}

          <div className={styles.register}>
            <span>
              Já tem uma conta? <Link href="/login">Faça login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
