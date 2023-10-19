import React, { useState } from "react";
import styles from "./Navbar.module.css";
import instagram from "../images/instagram.png";
import  facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openNav = () => {
    setIsSidebarOpen(true);
  };

  const closeNav = () => {
    setIsSidebarOpen(false);
  };
  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>



    <div className={styles.nav}>
      <div className={styles.flex}>
        <span className={styles.icon}>

          <img src="https://www.hexabells.com/assets/images/hexabells-logo.webp" alt="web-logo"/>
        </span>
        <span className={styles.openbtn} onClick={openNav}>
          &#9776;
        </span>
        <div
          id="mySidenav"
          className={`${styles.sidenav} ${isSidebarOpen ? styles.open : ""}`}
        >
          <span className={styles.closebtn} onClick={closeNav}>
            &times;
          </span>
          <Link to="/" className={styles.link} onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className={styles.link} onClick={handleLinkClick}>About</Link>
          <Link to="/expertise" className={styles.link} onClick={handleLinkClick}>Expertise</Link>
          <Link to="/services" className={styles.link} onClick={handleLinkClick}>Services</Link>
          <Link to="/contactus" className={styles.link} onClick={handleLinkClick}>Contact Us</Link>
          <Link to="/buzzfeed" className={styles.link} onClick={handleLinkClick}>Buzz Feed</Link>
          <div className={styles.footer}>
            <img src={twitter} alt="twitter" className={styles.twitter} />
            <img src={linkedin} alt="linkedin" className={styles.linkedin} />
            <img src={instagram} alt="instagram" className={styles.instagram} />
            <img src={facebook} alt="facebook" className={styles.facebook} />
            <p> 2023 2023 www.hexabells.com All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
     
    </>
  );
};

export default Navbar;
