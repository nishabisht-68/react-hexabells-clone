import React from "react";
import arrow from "../images/arrow.png";
import styles from "./Careers.module.css";

function Careers() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["text-container"]}>
          <p className={styles.para}>Careers</p>
          <h1 className={styles.heading}>
            <span className={styles.red}>We're growing and</span>
            <br/>
            we want you to <span className={styles.red}>join us</span>
          </h1>
          <p className={styles.para}>
            Explore current available positions and locate your next dream job.
            If you don't find what you're searching for, please feel free to
            apply for future positions.
          </p>
          <div className={styles.left}>
            <button className={styles["arrow-button"]}>
              Open Roles
              <img className={styles.imgbtn} src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div className={styles["image-container"]}>
          <img
            className={styles.img}
            src="https://www.hexabells.com/assets/images/Chair.webp"
            alt="careers"
          />
          <div className={styles.caption}>
            Life is short.
            <br />
            Work somewhere awesome
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;
