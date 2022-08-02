import React from "react";
import styles from "./styles.module.css";

interface IProps {
  progress: number;
}

const ProgressBar = ({ progress }: IProps) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.items}>
        <span style={progress === 1 ? { background: "#bdbbbb" } : {}}>
          1 Revise seu carrinho
        </span>
        <span style={progress === 2 ? { background: "#bdbbbb" } : {}}>
          2 Identificação
        </span>
        <span style={progress === 3 ? { background: "#bdbbbb" } : {}}>
          3 Pagamento
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
