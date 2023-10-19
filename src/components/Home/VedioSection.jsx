import React from "react"
import styles from "./VedioSection.module.css"
import arrow from "../images/arrow.png";

function VedioSection(){
    return(
        <>
         <div className={styles.container}>
         <div className={styles['image-container']}>
        <video className="video"
         width="700" height="400" 
         controls>
            <source src="https://www.hexabells.com/assets/images/hexabells.m4v" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      
    </div>
    <div className={styles['text-container']}>
        <p>We Craft Solutions that are</p>
      <h1>Innovative. Resilient. Sustainable.</h1>
      <p>We love innovation. We love to combine human intelligence with innovative Artificial Intelligence and Machine Learning methodologies fueled on consumer data to learn unique systems, continuously adapting to dynamic environments while delivering comprehensive analytics and automation for complex workflows.</p>
      <button className={styles['arrow-button']}>
            Meet our team
            <img src={arrow} alt="arrow"/>
        </button>
      
    </div>
  </div>
        </>
    )
}

export default VedioSection;






