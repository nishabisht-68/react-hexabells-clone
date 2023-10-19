import React from "react";
import styles from "./ImageTransition.module.css";

function ImageTransition(){
    return(
        <>
        <div className={styles.container}>
        <div className={styles.box}>
            <img className={styles.img} src="https://www.hexabells.com/assets/images/Interactionv1.webp" alt="interaction" />
            <div className={styles.overlay}>
            <div className={styles.content}>
              <h2>Interaction</h2>
            <p className={styles.para}>Levaraging game tools and technology to enhance user experience to maximum output.</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <img className={styles.img} src="https://www.hexabells.com/assets/images/Reasoningv1.webp" alt="reasoning" />
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h2>Reasoning</h2>
            <p className={styles.para}>Drawing constructive conclusions and making future-proof predictions backed by data for quick problem-solving.</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <img className={styles.img} src="https://www.hexabells.com/assets/images/Learningv1.webp" alt="learning" />
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h2>Learning</h2>
            <p className={styles.para}>Seamless development process with clean, high quality codes to improve products; efficiency and performance.</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <img className={styles.img} src="https://www.hexabells.com/assets/images/Recommendv1.webp" alt="recommend" />
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h2>Recomendation</h2>
            <p className={styles.para}>Extracting detailed insights to redesign your strategies and planning your next move with start recommendations.</p>
          </div>
        </div>
      </div>
    </div>


        </>
    )
}

export default ImageTransition;