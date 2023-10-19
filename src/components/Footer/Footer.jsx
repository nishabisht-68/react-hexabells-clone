import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
         <div className={styles['footer-main']}>
        <div className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles['flex-item']}>
                <div className={styles['footer-1']}>
                  <span>Learn more</span>
                  <span>
                    <Link to="/about">About us</Link>
                  </span>
                </div>
              </div>
              <div className={styles['flex-item']}>
                <div className={styles['footer-1']}>
                  <span>Get in touch</span>
                  <span>
                    <Link to="/contact">Contact</Link>
                  </span>
                </div>
              </div>
              <div className={styles['flex-item']}>
                <div className={styles['footer-1']}>
                  <span>Your</span>
                  <span>
                    <Link to="/about">Career</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.address}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles['footer-2']}>
                  <span>Hexabells Technologies Pvt. Ltd</span>
                  <address>
                    C-10, Block C, Sector-3, Noida 201301(U.P.) India
                  </address>
                </div>
                <div>
                  <div className={styles.social}>
                    <a href="https://www.linkedin.com/company/hexabells">
                      <img className="x"
                        src="https://www.hexabells.com/assets/images/twitter-icon.svg"
                        alt="social"
                      />
                      
                    </a>
                    <a href="https://www.linkedin.com/company/hexabells">
                      <img className="lk"
                        src="https://www.hexabells.com/assets/images/linkedin.svg"
                        alt="social"
                      />
                    </a>
                    <a href="https://www.instagram.com/p/Cq-SmqCrTXX">
                      <img className="ig"
                        src="https://www.hexabells.com/assets/images/Blogs/instagram.svg"
                        alt="social"
                      />
                    </a>
                    <a href="https://www.facebook.com/hexabells">
                      <img className="fb"
                        src="https://www.hexabells.com/assets/images/fb-icon.svg"
                        alt="social"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copright}>
          <div className={styles.row}>
            <div className={styles['footer-3']}>
              <span>2023 www.hexabells.com All rights reserved</span>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
        
        </>
    )
}

export default Footer;