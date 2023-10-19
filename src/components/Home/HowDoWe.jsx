import React from "react";
import styles from "./HowWeDo.module.css"

function HowWeDo(props){
    return(
        <> <div className={styles.container}>
        <div className={styles.content}>
            <p className={styles.para}>
               {props.para}
               </p>
            <h1 className={styles.heading}> {props.head}
<span className={styles.red}>{props.span}</span></h1>
            <p className={styles.para}>
                {props.para2}
            </p>
        </div>
    </div>

        </>
    )
}


export default HowWeDo;