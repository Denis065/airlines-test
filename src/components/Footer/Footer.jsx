import React from 'react';
import Home from '../../pictures/Home.svg';
import Bag from '../../pictures/Bag.svg';
import Search from '../../pictures/Search.svg';
import styles from './Footer.module.css';

function Footer(props) {
  return (
    <div className={styles.footer}>
      <div>
        <img className={styles.picOne}src={Home} alt='home'/>
        <img className={styles.picTwo} src={Search} alt='search'/>
        <img src={Bag} alt='bag' />
      </div>
    </div>
  );
}

export default Footer;
