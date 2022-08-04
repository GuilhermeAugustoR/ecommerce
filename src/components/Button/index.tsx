import React from "react";
import styles from "./styles.module.css";

interface IProps {
  Title: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ Title, onClick, disabled }: IProps) => {
  return (
    <div>
      <button
        className={styles.button}
        onClick={onClick}
        disabled={disabled}
        style={disabled ? { background: "#c3c3c3", cursor: 'not-allowed' } : {}}
      >
        {Title}
      </button>
    </div>
  );
};

export default Button;
