import React from 'react';
import PassengersList from '../PassengersList/PassengersList.jsx';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';

function App(props) {

  return (
    <>
      <Header />
      <PassengersList />
      <Footer />
    </>
  );
}

export default App;
