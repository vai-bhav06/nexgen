import React from 'react';
import homeImg from '../images/homeimg1.jpg';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-left">
        <h1>Let’s simplify your finances with expert care and guidance</h1>
        <p>Premium accounting crafted to deliver your business expert care, insight, and trust.</p>
        <button className="home-btn">Book an Appointment</button>
      </div>

      <div className="home-right">
        <img src={homeImg} alt="Home" />
      </div>
    </section>
  );
};

export default Home;
