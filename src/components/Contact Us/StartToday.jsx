import React from "react";
import styles from "./StartToday.module.css";
import arrow from "../images/arrow.png"



function StartToday(){
    return(
        <>
        <div className={styles.container}>
        <div className={styles.row1}>
        <p>Need a proposal quickly?</p>
            <h1>Fill out the brief.</h1>
            <p>Describe your requirements, and we will produce an initial offer for you within 24 hours.</p>
            <div className={styles.left}>
                <button className={styles['arrow-button']}>
                Let's share brief
                    <img src={arrow} alt="arrow"/>
                </button>
    
            </div>
        </div>
        <div className={styles.row2}>
        <p>Do you want to meet us?</p>
            <h1>Select a date.</h1>
            <p>Write us an e-mail via this form, or just send us an email directly at info@hexabells.com</p>
            <div className={styles.left}>
                <button className={styles['arrow-button']}>
                Let's start today
                    <img src={arrow} alt="arrow"/>
                </button>
    
            </div>
        </div>
    </div>
        </>
    )
    
}

export default StartToday;