import React from "react";
import styles from "./OurFocuesed.module.css";
import cardiogram from "../images/cardiogram.png";
import fastDelivery from "../images/fast-delivery.png";
import b2b from "../images/b2b.png";
import graduation from "../images/graduation.png";
import grocery from "../images/grocery-store.png";
import hashTag from "../images/hash-tag.png";
import house from "../images/house.png";
import insurance from "../images/insurance.png";
import luggage from "../images/luggage.png";
import plane from "../images/plane-taking-off.png";
import dumbbell from "../images/dumbbell.png";
import home from "../images/home.png";
import law from "../images/law.png";
import restaurant from "../images/restaurant.png";
import signalTower from "../images/signal-tower.png";






function OurFocused(){
    return(
        <>
        <div className={styles.container}>
        <div className={styles['text-container']}>
            <p className={styles.para}>Industries & Areas
            </p>
            <h1 className={styles.heading}>
                
                Our <span className={styles.red}>Verticals Focused</span>
            </h1>
            <p className={styles.para}>
                We at HexaBells wish to leave our mark in a variety of industries. Our brief yet significant experience taught us about how clients behave in various industries. Our imagination and viewpoint are crucial in adjusting to that unique vertical.

            </p>
        </div>
        <div className={styles.expertise}>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={cardiogram} alt="icons"/>
                <h1 className={styles.head}>Healthcare</h1>
                <p className={styles.para}>Website design & development for healthcare, pharmacy, and wellness businesses</p>
            </div>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={hashTag} alt="icons"/>
                <h1 className={styles.head}>Startups</h1>
                <p className={styles.para}>Proof of concept and MVP creation by a seasoned web design and development firm</p>
                
            </div>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={plane} alt="icons"/>
                <h1 className={styles.head}>Airlines</h1>
                <p className={styles.para}>Reshape the flight experience with a fully responsive, modern, and user-friendly interface for leading airline</p>

            </div>
        </div>
        <div className={styles.expertise}>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={luggage} alt="icons"/>
                <h1 className={styles.head}>Travel</h1>
                <p className={styles.para}>
                Web design, branding, and travel and tourism software development services are provided to travel agencies
                </p>
            </div>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={house} alt="icons"/>
                <h1 className={styles.head}>Real Estate</h1>
                <p className={styles.para}>Design and development of websites for real estate agents, estate agents, and other property professions
</p>
                
            </div>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={graduation} alt="icons"/>
                <h1 className={styles.head}>EdTech</h1>
                <p className={styles.para}>learning management systems made to order for different businesses in education
</p>

            </div>
        </div>
        <div className={styles.expertise}>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={b2b} alt="icons"/>
                <h1 className={styles.head}>B2B</h1>
                <p className={styles.para}>B2B website services for providing timely and compassionate responses to your customers in need
</p>
            </div>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={insurance} alt="icons"/>
                <h1 className={styles.head}>Transportation</h1>
                <p className={styles.para}>Development & Web design for car dealers and Trucking company
</p>
                
            </div>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={fastDelivery} alt="icons"/>
                <h1 className={styles.head}>Transportation</h1>
                <p className={styles.para}>
Development & Web design for car dealers and Trucking company
</p>

            </div>
        </div>
        <div className={styles.expertise}>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={grocery} alt="icons"/>
                <h1 className={styles.head}>E-Commerce</h1>
                <p className={styles.para}>Allow people to buy and sell physical goods, services, and digital products over the internet</p>
            </div>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={law} alt="icons"/>
                <h1 className={styles.head}>Law Firms</h1>
                <p className={styles.para}>Law firms website design & development</p>
                
            </div>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={signalTower} alt="icons"/>
                <h1 className={styles.head}>Telecom</h1>
                <p className={styles.para}>Website design and branding for telecommunications companies
</p>

            </div>
        </div>
        <div className={styles.expertise}>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={home} alt="icons"/>
                <h1 className={styles.head}>Home Builders</h1>
                <p className={styles.para}>Website design and developement for construction and home builder firms
</p>
            </div>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={dumbbell} alt="icons"/>
                <h1 className={styles.head}>Gym & Fitness</h1>
                <p className={styles.para}>Website is a great way to reach people who may not know about you
</p>
                
            </div>
            <div className={styles['text-logo']}>
                <img className={styles.logo} src={restaurant} alt="icons"/>
                <h1 className={styles.head}>Restaurant</h1>
                <p className={styles.para}>Develop an online presence for your customers</p>

            </div>
        </div>
        </div>
    

        </>
    )
}

export default OurFocused;