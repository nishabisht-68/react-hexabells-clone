import React from "react";
import styles from "./Form.module.css";
import arrow from "../images/arrow.png"


function Form(){
    return(
        <>
         <div className={styles.container}>
        <div className={styles['background-image']}>
        </div>
        <div className={styles['form-container']}>
            <form>
            <label for="fullname">Full Name</label>
            <input type="text" name="fullname" placeholder="eg. John wayne"></input>
            <label for="fullname">Email</label>
            <input type="text" name="fullname" placeholder="eg. John.wayne@company.com"></input>
            <label for="fullname">Phone Number</label>
            <input type="text" name="fullname" placeholder="eg. 9586785412 "></input>
            <label for="fullname">Message</label>
            <textarea cols="30" rows="5" name="fullname" placeholder="eg. I like to start a new project"></textarea>
            <div className={styles.left}>
                <button className={styles['arrow-button']}>
                Let's share brief
                    <img src={arrow} alt="arrow"/>
                </button>
    
            </div>
            </form>
        </div>
    </div>


        </>
    )
}


export default Form;