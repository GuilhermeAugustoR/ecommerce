import React from "react";
import styles from "./styles.module.css";

interface IProps {
  type?: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  htmlFor?: string;
  maxLength?: number;
  disabled?: boolean;
}

const Input = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  htmlFor,
  maxLength,
  disabled,
}: IProps) => {
  return (
    <div className={styles.input}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={htmlFor}
        type={!type ? "text" : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
