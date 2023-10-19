import React from "react";
import styles from "./VissionMission.module.css";
import eye from "../images/eye.png";
import bullseye from "../images/bullseye.png";


function VissionMission(){
    return(
        <>
        <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
                <div className={styles.score}>
                    <h1>50</h1>
                    

                </div>
                <div className={styles.scorein}>
                    <p>Tech covered</p>

                </div>

            </div>
            <div className={styles.row}>
                <div className={styles.score}>
                    <h1>95</h1>
                  
                </div>
                <div className={styles.scorein}>
                    <p>Success rate</p>
                    
                </div>


            </div>
            <div className={styles.row}>
                <div className={styles.score}>
                <h1>90</h1>

                </div>
                <div className={styles.scorein}>
                    <p>Team members</p>
                    
                </div>


            </div>
            <div className={styles.row}>
                <div className={styles.score}>
                    <h1>90</h1>

                </div>
                <div className={styles.scorein}>
                    <p>Net Promoter
                        <br/>
                        Score(NPS)</p>
                    
                </div>


            </div>

        </div>
        <div className={styles.right}>
            <div className={styles.main}>
                <img src={eye} alt="hide"/>
                <h3>Our Vision</h3>
                <h3>Be the <span>Technology Enabler and the Change Catalyst </span>for partner businesses and pave the way for a better, digital future.</h3>
            </div>
            <div className={styles.main}>
                <img src={bullseye} alt="target"/>
                <h3>Our Mission</h3>
                <h3><span>One-stop destination for modern organizations </span>to get their hands on the best of technology and digital solutions for sustainable growth.</h3>
            </div>

        </div>
    </div>








        </>
    )
}

export default VissionMission;