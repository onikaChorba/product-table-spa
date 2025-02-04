import React from "react";
import styles from "./header.module.scss";
import user from "./../../assets/icons/user.svg";
import logout from "./../../assets/icons/log-out.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        Company <span>Logo</span>
      </div>
      <div className={styles.header__user}>
        <p className={styles["header__user-email"]}>
          <img src={user} alt="user" />
          <span>mike-dawson@gmail.com</span>
        </p>
        <button className={styles["header__user-logout"]}>
          <img src={logout} alt="log-out" />
          <span>Sing Out</span>
        </button>
      </div>
    </header>
  )
}