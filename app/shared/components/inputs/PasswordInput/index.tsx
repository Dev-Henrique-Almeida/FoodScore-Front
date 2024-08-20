import React from "react";
import styles from "@/app/(general)/register/register.module.scss";

interface PasswordInputProps {
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export default function PasswordInput({
  id,
  name,
  placeholder,
  required = true,
  value,
  onChange,
  label,
}: PasswordInputProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}:
      </label>
      <input
        type="password"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
