import React from "react";
import arrow from "../images/arrow.png";
import styles from "./RightImageButton.module.css";

function RightImageButton(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles['text-container']}>
          <p className={styles.para}>{props.para} <span className={styles.red}>{props.span}</span></p>
          <h1 className={styles.heading}>{props.head}</h1>
          <p className={styles.para}>
          {props.para2}
           
          </p>
          <div className={styles.left}>
            <button className={styles["arrow-button"]}>
              {props.buttonText}
              <img className={styles.imgbtn} src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div className={styles["image-container"]}>
          <img
            className={styles.img}
            src={props.imgUrl}
            alt="hexabells"
          />
          <div className={styles.caption}>
            {props.caption}
            <br/>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightImageButton;
