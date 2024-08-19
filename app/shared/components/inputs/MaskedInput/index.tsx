import React, { useState, ChangeEvent } from "react";
import styles from "@/app/(general)/register/register.module.scss";

interface CustomMaskedInputProps {
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  mask: (value: string) => string;
}

const applyMask = (value: string, mask: (value: string) => string): string => {
  return mask(value);
};

export default function CustomMaskedInput({
  id,
  name,
  placeholder,
  required = true,
  value,
  onChange,
  label,
  mask,
}: CustomMaskedInputProps) {
  const [maskedValue, setMaskedValue] = useState(() => applyMask(value, mask));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setMaskedValue(applyMask(newValue, mask));
    onChange(e);
  };

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}:
      </label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        className={styles.input}
        value={maskedValue}
        onChange={handleChange}
      />
    </div>
  );
}
