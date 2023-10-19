import React from "react";
import styles from "./RightImagePara.module.css";


function RightImagePara(props){
    return(
        <>
        <div className={styles.container}>
        <div className={styles['text-container']}>
          <p className={styles.para}>{props.para}</p>
          <h1 className={styles.heading}>{props.head}</h1>
          <p className={styles.para}>
          {props.para1}
           </p>
          <p className={styles.para}>
          {props.para2}
           
          </p>
   
        </div>
        <div className={styles["image-container"]}>
          <img
            className={styles.img}
            src={props.imgUrl}
            alt="solutions"
          />
        </div>
      </div>


        </>
    )
}

export default RightImagePara;