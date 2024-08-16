"use client";

import React, { useEffect, useState } from "react";
import styles from "../login/login.module.scss";
import Link from "next/link";
import { createUser, loginUser } from "@/app/shared/service/UserApi";
import { useAuthContext } from "@/app/shared/contexts/Auth/AuthContext";
import { useRouter } from "next/navigation";
import useHandleChangeUser from "@/app/shared/hooks/HandleChangeUser/useHandleChangeUser";

export default function Register() {
  const router = useRouter();
  const { formData, handleChange } = useHandleChangeUser();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user, setUser, setToken } = useAuthContext();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, router]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const { id, ...dataToSend } = formData;

    try {
      await createUser(dataToSend);

      const loginData = await loginUser({
        email: formData.email,
        password: formData.password,
      });
      setUser(loginData.user);
      setToken(loginData.token);

      setSuccess("Registro realizado com sucesso!");
      router.push("/home");
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
              value={formData.name}
              onChange={handleChange}
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
            Registrar
          </button>

          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}

          <div className={styles.register}>
            <span>
              Já tem uma conta?{" "}
              <Link href="/login" className={styles.regiterLink}>
                Faça login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
