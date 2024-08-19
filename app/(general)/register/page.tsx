"use client";

import React, { useEffect, useState } from "react";
import styles from "./register.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useHandleChangeUser from "@/app/shared/hooks/HandleChangeUser/useHandleChangeUser";
import { useAuthContext } from "@/app/shared/contexts";
import { createUser, loginUser } from "@/app/shared/service";
import TextInput from "@/app/shared/components/inputs/TextInput/index";
import PasswordInput from "@/app/shared/components/inputs/PasswordInput/index";
import CustomMaskedInput from "@/app/shared/components/inputs/MaskedInput/index";
import { phoneMask } from "@/app/shared/utils/masks/masks";

export default function Register() {
  const router = useRouter();
  const { formData, handleChange } = useHandleChangeUser();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
          <TextInput
            id="name"
            name="name"
            placeholder="Nome"
            label="Nome"
            value={formData.name}
            onChange={handleChange}
          />
          <TextInput
            id="email"
            name="email"
            placeholder="Email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
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
          <TextInput
            id="address"
            name="address"
            placeholder="Endereço"
            label="Endereço"
            value={formData.address}
            onChange={handleChange}
          />
          <CustomMaskedInput
            id="phone"
            name="phone"
            placeholder="(11) 98765-4321"
            label="Telefone"
            value={formData.phone}
            onChange={handleChange}
            mask={phoneMask}
          />
          <TextInput
            id="birthdate"
            name="birthdate"
            placeholder=""
            label="Data de Nascimento"
            value={formData.birthdate ?? ""}
            onChange={handleChange}
            type="date"
          />

          <PasswordInput
            id="password"
            name="password"
            placeholder="Senha"
            label="Senha"
            value={formData.password}
            onChange={handleChange}
          />
          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmar Senha"
            label="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
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
