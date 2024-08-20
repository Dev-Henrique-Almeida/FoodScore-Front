import React from "react";
import styles from "@/app/(general)/register/register.module.scss";

interface SelectProps {
  id: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  options: { value: string; label: string }[];
}

export default function SelectField({
  id,
  name,
  required = true,
  value,
  onChange,
  label,
  options,
}: SelectProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}:
      </label>
      <select
        id={id}
        name={name}
        required={required}
        className={styles.input}
        value={value}
        onChange={onChange}
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
