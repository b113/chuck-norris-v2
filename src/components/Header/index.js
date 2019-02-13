import React from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import styles from './header.module.css';
import logo from '../../img/logo.png'

const Header = () => (
  <header className={styles.header}>
    <Router>
      <NavLink exact to="/"><img src={logo} className={styles.logo} alt="logo" /></NavLink>
    </Router>
  </header>
)

export default Header;

