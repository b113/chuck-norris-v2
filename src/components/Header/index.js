import React from 'react';
import styles from './header.module.css';
import logo from '../../img/logo.png'


const Header = () => (
  <header className={styles.header}>
    <img src={logo} className={styles.logo} alt="logo" />
  </header>
)

export default Header;

