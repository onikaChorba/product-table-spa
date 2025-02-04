import React from 'react';
import styles from './input.module.scss';
import search from './../../assets/icons/input-search.svg';

interface InputProps {
  type: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <input type={type} placeholder={placeholder} className={styles.inputContainer__input} />
      <img src={search} alt='search' />
    </div>

  )
}