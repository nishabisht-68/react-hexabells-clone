import React from "react";
import styles from "./LeftImage.module.css";


function LeftImage(props){
    return(
        <>
       <div className={styles.container}>
<div className={styles['image-container']}>
    <img className={styles.img} src={props.imageUrl} alt="services"/>
  </div>
<div className={styles['text-container']}>
<p className={styles.para}>{props.para}</p>
    <h1 className={styles.heading}>{props.title}</h1>
    <p className={styles.para}>{props.content}</p>
  </div>
</div>

        </>
    )
}


export default LeftImage;


