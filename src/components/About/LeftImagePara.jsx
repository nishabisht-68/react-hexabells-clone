import React from "react";
import styles from "./LeftImagePara.module.css";


function LeftImage(props){
    return(
        <>
         <div className={styles.container}>
    <div className={styles['image-container']}>
      <img className={styles.img} src={props.imgUrl} alt="idea-behind" />
    </div>
    <div className={styles['text-container']}>
        <p className={styles.para}>{props.para}</p>
      <h1 className={styles.heading}>{props.heading}</h1>
      <p className={styles.para}>{props.para1}</p>
      <br/>
        <p className={styles.para}>
       {props.para2}

      </p>
      <br/>
      <p className={styles.para}>
     {props.para3}
      </p>

      
    </div>
  </div>


        </>
    )
}

export default LeftImage;