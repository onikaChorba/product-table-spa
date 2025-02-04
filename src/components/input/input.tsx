import React from 'react';
import styles from './input.module.scss';
import search from './../../assets/icons/input-search.svg';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <input type={type} placeholder={placeholder} className={styles.inputContainer__input} value={value} onChange={onChange} />
      <img src={search} alt='search' />
    </div>
  )
}