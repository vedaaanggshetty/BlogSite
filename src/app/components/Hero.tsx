import React from 'react';
import TypingAnimation from './TypingAnimation';
const Hero = () => {
  return (
    <section className="section hero" aria-label="home">
      <div className="container">
        <section className="hero">
         <TypingAnimation /> 
         </section>

        <div className="wrapper">
          <form action="" className="newsletter-form">
            <input
              type="email"
              name="email_address"
              placeholder="Your email address"
              className="email-field"
            />
            <button type="submit" className="btn">Subscribe</button>
          </form>
          

          {/* <p className="newsletter-text">
            Get the email newsletter and unlock access to members-only content and updates
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;