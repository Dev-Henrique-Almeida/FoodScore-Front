import React from "react";
import InputMask from "react-input-mask";
import styles from "@/app/(general)/register/register.module.scss";

interface MaskedInputProps {
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  mask: string;
}

export default function MaskedInput({
  id,
  name,
  placeholder,
  required = true,
  value,
  onChange,
  label,
  mask,
}: MaskedInputProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}:
      </label>
      <InputMask
        mask={mask}
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
