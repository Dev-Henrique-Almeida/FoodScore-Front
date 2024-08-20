import React from "react";
import styles from "@/app/(general)/register/register.module.scss";

interface TextInputProps {
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
  pattern?: string;
}

export default function TextInput({
  id,
  name,
  placeholder,
  required = true,
  value,
  onChange,
  label,
  type = "text",
  pattern,
}: TextInputProps) {
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
        pattern={pattern}
      />
    </div>
  );
}
