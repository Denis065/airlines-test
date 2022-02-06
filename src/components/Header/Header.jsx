import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>List of passengers</h1>
    </div>
  );
}

export default Header;
