import React from "react";

import styles from "./MeetTheTeam.module.css";


function MeetTheTeam(){
    return(
        <>
             <div className={styles.container}>
        <div className={styles.content}>
            <p className={styles.para}>Meet the team
               
               </p>
            <h1 className={styles.heading}> 
            Led by a group of <span className={styles.red}>industry pioneers</span></h1>
            <p className={styles.para}>We strive for a diverse, inclusive and supportive team of proactive creators and strategic thinkers, working together.</p>
        </div>
    </div>

       </>
    );
};

export default MeetTheTeam;