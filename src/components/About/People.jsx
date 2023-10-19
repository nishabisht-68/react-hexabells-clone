import React from "react";
import styles from "./People.module.css";


function People(props){
    return(
        <>

<div className={styles.container}>
      <div className={styles.row}>
        <div className={`${styles.card} ${styles.one}`}>
          <div className={styles.image}>
            <img src={props.imgUrl1} alt="members" />
          </div>
          <div className={styles.title}>
            <h2>{props.head1}</h2>
            <p>
            {props.para1}
              </p>
              <p> {props.span1}</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.two}`}>
          <div className={styles.image}>
            <img src={props.imgUrl2} alt="members" />
          </div>
          <div className={styles.title}>
            <h2>{props.head2}</h2>
            <p>
            {props.para2}
              </p>
              <p> {props.span2}</p>
          </div>
        </div>
      </div>
    </div>
  
       


        </>
    )
}

export default People;