import React from "react";
import styles from "./Newsletter.module.css";
import arrow from "../images/arrow.png";

function Newsletter(){
    return(
        <>
        <div className={styles.container}>
      <div className={styles['text-container']}>
        <p className={styles.para}>Subscribe to our</p>
        <h1 className={styles.heading}>Newsletter</h1>
        <p className={styles.para}>We are going to share only mails per week</p>
      </div>
      <div className={styles.form}>
        <div className={styles.left}>
          <input className={styles.mail} type="email" placeholder="Enter your email address" />
        </div>

        <div className={styles.right}>
          <button className={styles['arrow-button']}>
            Subscribe

            <img className={styles.img} src={arrow} alt="arrow"/>
          </button>
        </div>
      </div>
    </div>

        </>
    )
}

export default Newsletter;