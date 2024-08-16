"use client";

import React, { useEffect, useState } from "react";
import styles from "./register.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useHandleChangeUser from "@/app/shared/hooks/HandleChangeUser/useHandleChangeUser";
import { useAuthContext } from "@/app/shared/contexts";
import { createUser, loginUser } from "@/app/shared/service";

export default function Register() {
  const router = useRouter();
  const { formData, handleChange } = useHandleChangeUser();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para confirmar senha
  const { user, setUser, setToken } = useAuthContext();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Validação da confirmação de senha
    if (formData.password !== confirmPassword) {
      setError("As senhas não coincidem. Tente novamente.");
      return;
    }

    const { id, ...dataToSend } = formData;

    try {
      await createUser(dataToSend);

      const loginData = await loginUser({
        email: formData.email,
        password: formData.password,
      });
      setUser(loginData.user);
      setToken(loginData.token);

      alert("Registro realizado com sucesso!");
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
            <label htmlFor="sex" className={styles.label}>
              Sexo:
            </label>
            <select
              id="sex"
              name="sex"
              required
              className={styles.input}
              value={formData.sex}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              <option value="Male">Masculino</option>
              <option value="Female">Feminino</option>
              <option value="Other">Outro</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="address" className={styles.label}>
              Endereço:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Endereço"
              required
              className={styles.input}
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="phone" className={styles.label}>
              Telefone:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Telefone"
              required
              className={styles.input}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="birthdate" className={styles.label}>
              Data de Nascimento:
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              required
              className={styles.input}
              value={formData.birthdate}
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
          <div className={styles.field}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirmar Senha:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmar Senha"
              required
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
