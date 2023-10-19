import React from "react"
import styles from "./RightImage.module.css";



function RightImage(props){
    return(
        <>


<div className={styles.container}>
<div className={styles['text-container']}>
    <h1 className={styles.heading}>{props.title}</h1>
    <p className={styles.para}>{props.content}</p>
  </div>
<div className={styles['image-container']}>
    <img className={styles.img} src={props.imageUrl} alt="services"/>
  </div>
</div>

        </>
    )
}

export default RightImage;


