import React from "react";
import styles from "@/app/(general)/register/register.module.scss";
import { IInputProps } from "@/app/shared/@types";

export default function InputField({
  id,
  name,
  placeholder,
  required = true,
  value,
  onChange,
  label,
  type,
}: IInputProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}:
      </label>
      <input
        type={type}
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
