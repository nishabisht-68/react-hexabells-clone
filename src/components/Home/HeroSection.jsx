import React from "react";
import arrow from "../images/arrow.png"
import styles from './HeroSection.module.css';

function HeroSection(){
    return(
        <>
        <section>



         <div className={styles['flex-container']}>
        <div className={`${styles.containerT} ${styles.title}`}>
            <div className={styles.content}>
                <h1 className={styles.heading}>Transforming Disruptive Concepts into <span>Breakthrough Innovations</span> using Futuristic Technology Solutions</h1>

                
                <div className={styles.right}>
                    <button className={styles['arrow-button']}>
                        Let's start today!
                        <img src={arrow} alt="arrow"/>
                        
                    </button>
                </div>
            </div>
        </div>
        <div className={`${styles.containerI} ${styles.title}`}>
            <div className={styles.content}>
                <img className={styles.img} src="https://www.hexabells.com/assets/images/banner.webp" alt="banner"/>
                </div>
            </div>
        </div>
    
        </section>

        </>
    )
}

export default HeroSection;



