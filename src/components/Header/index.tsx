import Link from "next/link";
import React from "react";
import styles from  './styles.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">Next</Link>
      </div>
      <div className={styles.header__menu}>
        <Link href="/">Masculino</Link>
        <Link href="/">Feminino</Link>
        <Link href="/">Acessórios</Link>
        <Link href="/">Outlet</Link>
      </div>
      <div className={styles.header__login}>
        <Link href="/">Login</Link>
      </div>
    </div>
  );
};
