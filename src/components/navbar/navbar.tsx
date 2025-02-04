import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './navbar.module.scss';
import arrow from './../../assets/icons/arrow.svg';
import arrowActive from './../../assets/icons/arrow-active.svg';

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>('productList');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>
          <Link
            to="/product-list"
            className={`${styles.navbar__link} ${activeLink === 'productList' ? styles.active : ''}`}
            onClick={() => handleLinkClick('productList')}
          >
            Product List
          </Link>
          <img
            src={activeLink === 'productList' ? arrowActive : arrow}
            alt='arrow'
          />
        </li>
        <li className={styles.navbar__item}>
          <Link
            to="/my-account"
            className={`${styles.navbar__link} ${activeLink === 'myAccount' ? styles.active : ''}`}
            onClick={() => handleLinkClick('myAccount')}
          >
            My Account
          </Link>
          <img
            src={activeLink === 'myAccount' ? arrowActive : arrow}
            alt='arrow'
          />
        </li>
      </ul>
    </nav>
  );
};
