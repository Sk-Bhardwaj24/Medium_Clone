import React from "react";
import styles from "../styles/Notfound.module.css";
import styled from "styled-components";
const Anchor = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  background: var(--button);
  color: var(--button-color);
  padding: 1rem 4rem;
  border-radius: 4rem;
  font-size: 0.875rem;
  letter-spacing: 0.05rem;
`;

const Notfound = () => {
  return (
    <div className={styles.Notfound}>
      <h1 className={styles.H1F}>404</h1>
      <div className={styles.cloak__wrapper}>
        <div className={styles.cloak__container}>
          <div className={styles.cloak}></div>
        </div>
      </div>
      <div className={styles.info}>
        <h2>We can't find that page</h2>
        <p className={styles.P1F}>Oops...</p>
        <Anchor
          className={styles.A}
          href="https://sk-bhardwaj-medium-clone.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Home
        </Anchor>
      </div>
    </div>
  );
};

export default Notfound;
