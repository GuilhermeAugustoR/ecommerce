import React from "react";
import styles from "./styles.module.css";

interface IProps {
  Title: string;
  onClick?: () => void;
}

const Button = ({ Title, onClick }: IProps) => {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        {Title}
      </button>
    </div>
  );
};

export default Button;
