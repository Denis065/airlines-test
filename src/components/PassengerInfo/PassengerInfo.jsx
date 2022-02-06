import React from 'react';
import styles from './PassengerInfo.module.css';

function PassengerInfo({passenger}) {

  return (
      <div className={styles.item}>
        <img className={styles.pic} src={passenger.airline[0].logo} alt="logo" />
        <div className={styles.divName}>
          <p className={styles.name}>{passenger.name}</p>
        </div>
      </div>
  );
}

export default PassengerInfo;


