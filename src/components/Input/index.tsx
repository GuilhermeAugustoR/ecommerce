import React from "react";
import styles from "./styles.module.css";

interface IProps {
  type?: string;
  label?: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  htmlFor?: string;
  maxLength?: number;
  disabled?: boolean;
  direction?: string;
  name?: string;
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
  direction = "column",
  name,
}: IProps) => {
  return (
    <div className={styles.input} style={{ flexDirection: direction }}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={htmlFor}
        type={!type ? "text" : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        name={name}
      />
    </div>
  );
};

export default Input;
