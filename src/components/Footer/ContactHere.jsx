import React from "react";
import styles from "./ContactHere.module.css";
import arrow from "../images/arrow.png";

function ContactHere(){
    return(
        <>
        <div className={styles.container}>
      <div className={styles['image-container']}>
        <img className={styles.img} src="https://www.hexabells.com/assets/images/lets-proceed1.webp" alt="proceed"/>
        <div className={styles.caption}>
            <h5>
                The bad news is time flies.
                <br/>

          
                The good news is you're the pilot"
            </h5>
    
            <p className={styles.para}>
                -Michael altshuler
                
            </p>    
      </div>
      </div>
      <div className={styles['text-container']}>
          <p className={styles.para}>Let's proceed;</p>
        <h1 className={styles.head}>We'll put you in touch with the
            finest individual.</h1>
        
        <div className={styles.left}>
            <button className={styles['arrow-button']}>
                Contact Here
                <img className={styles.buttonImage} src={arrow} alt="arrow"/>
            </button>

        </div>
    </div>

      
  </div>

        </>
    )
}


export default ContactHere;