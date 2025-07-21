import React from 'react';
import CountUp from 'react-countup';


const About = () => {
  return (
    <section className="about-section">
      <div className="about-left">
        <h2>About Us</h2>
        <p>
          NexGen is a forward-thinking tech company that delivers innovative digital solutions to businesses of all sizes. We specialize in modern web and mobile development with a focus on performance and user experience.
        </p>
        <button className="about-btn">Learn More</button>
      </div>

      <div className="about-right">
        <div className="about-grid">
          <div className="about-box">
            <h3>
              <CountUp end={100} duration={2} suffix="+" />
            </h3>
            <p>Projects Delivered</p>
          </div>
          <div className="about-box">
            <h3>
              <CountUp end={50} duration={2} suffix="+" />
            </h3>
            <p>Happy Clients</p>
          </div>
          <div className="about-box">
            <h3>
              <CountUp end={10} duration={2} suffix="+" />
            </h3>
            <p>Industries Served</p>
          </div>
          <div className="about-box">
            <h3>
              <CountUp end={5} duration={2} suffix="+" />
            </h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
