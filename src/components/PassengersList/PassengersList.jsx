import React, { useEffect, useState }from 'react';
import PassengerInfo from '../PassengerInfo/PassengerInfo.jsx';
import styles from './PassengersList.module.css';


function PassengersList() {
  const [passengers, setPassengers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&amp&size=6`)
    .then(data => data.json())
    .then(people => setPassengers([...passengers, ...people.data]))
  }, [page])
  
  const scrollToEnd = () => {
    setPage(page+ 1)
  }

  window.onscroll = function () {
    (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)
    && scrollToEnd()
  }
  
  return (
    <>
      <div className={styles.border}>
        {
          passengers.map((passenger) => <PassengerInfo key={passenger._id} passenger={passenger}/>)
        }
      </div>
    </>
  );
}

export default PassengersList;
