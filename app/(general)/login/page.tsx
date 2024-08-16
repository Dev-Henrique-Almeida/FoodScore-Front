"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.scss";
import Link from "next/link";
import { useAuthContext } from "@/app/shared/contexts/Auth/AuthContext";
import useHandleChangeUser from "@/app/shared/hooks/HandleChangeUser/useHandleChangeUser";
import { loginUser } from "@/app/shared/service/UserApi";

export default function Login() {
  const router = useRouter();
  const { formData, handleChange } = useHandleChangeUser();
  const [error, setError] = useState("");
  const { setUser, setToken } = useAuthContext();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    // Apenas os campos necessários para o login
    const { email, password } = formData;
    const dataToSend = { email, password };

    try {
      const data = await loginUser(dataToSend);
      setUser(data.user);
      setToken(data.token);
      router.push("/home");
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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
              <Link href="/register" className={styles.regiterLink}>
                Registre-se
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
