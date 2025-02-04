import React, { useState } from 'react';
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
          <a
            href="/product-list"
            className={`${styles.navbar__link} ${activeLink === 'productList' ? styles.active : ''}`}
            onClick={() => handleLinkClick('productList')}
          >
            Product List
          </a>
          <img
            src={activeLink === 'productList' ? arrowActive : arrow}
            alt='arrow'
          />
        </li>
        <li className={styles.navbar__item}>
          <a
            href="/my-account"
            className={`${styles.navbar__link} ${activeLink === 'myAccount' ? styles.active : ''}`}
            onClick={() => handleLinkClick('myAccount')}
          >
            My Account
          </a>
          <img
            src={activeLink === 'myAccount' ? arrowActive : arrow}
            alt='arrow'
          />
        </li>
      </ul>
    </nav>
  );
};
