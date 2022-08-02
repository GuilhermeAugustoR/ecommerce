import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">Next</Link>
      </div>
      <div className={styles.header__menu}>
        <Link href="/Man">Masculino</Link>
        <Link href="/">Feminino</Link>
        <Link href="/">Acessórios</Link>
        <Link href="/">Outlet</Link>
      </div>
      <div className={styles.header__login}>
        <div className={styles.ShoppingCart}>
          <Link href="/ShoppingCart">
            <BsCart3 style={{ cursor: "pointer" }} />
          </Link>
        </div>

        <div className={styles.Login}>
          <Link href="/Login">
            <FaUserCircle style={{ cursor: "pointer" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};
