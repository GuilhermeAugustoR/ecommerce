import React from "react";
import styles from "./styles.module.css";

const Carrousel = () => {
  return (
    <div className={styles.carousel}>
      <img
        width={1000}
        height={500}
        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        alt="carrousel"
      />
    </div>
  );
};

export default Carrousel;
