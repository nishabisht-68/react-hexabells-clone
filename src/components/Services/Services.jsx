import React from "react";
import RightImagePara from "../About/RightImagePara";
import LeftImagePara from "../About/LeftImagePara";
import WeAreFocused from "../Home/WeAreFocused";
import RightImage from "../Home/RightImage";
import LeftImage from "../Home/LeftImage";
import HowDoWe from "../Home/HowDoWe";
import ContactHere from "../Footer/ContactHere";


function Services() {
  return (
    <>
    <RightImagePara imgUrl="https://www.hexabells.com/assets/images/services/banner.webp" head="AI-Driven Apps, Software, and Website Development" para="We Facilitate clients with" para1="Experimenting Great Concepts with Creativity to Create Impeccable Technology Solutions for Modern Businesses." para2=""/>

    <LeftImagePara imgUrl="https://www.hexabells.com/assets/images/services/askfor.webp" para="Technology in Action" heading="To Turn Ideas into Driving Force" para1="Feature-richness, intuitive designs, personalized user experiences, seamless performance, and stringent security collectively set the standards for modern-day web-based solutions. And this is where predictive analysis and innovative AI-based technologies can give businesses a competitive edge." para2="Whether you've got a well-researched and adequately funded idea, a new mobile app, software, or web project, or you are planning to modernize and reengineer your legacy system, we can help take your product to the next level with our technological expertise and experience."/>

    <WeAreFocused para="Our Core Competencies" head="How We Can Help" span=" You?" secpara="With a team of highly creative designers, developers, data analysts , and AI/ML experts who have rich experience in their respective fields, we specialize in a wide range of services and solutions to meet the ever-changing needs of business."/>

    <RightImage  title="Website Development" content="With a strong foothold in full stack web development, we specialise in developing websites that effectively communicate with your target audiences, drive the right traffic, promote conversions and unlock new avenues for sales and business development." imageUrl="https://www.hexabells.com/assets/images/services/Services1.webp"/>

    <LeftImage title="Application Development" para="" content="Whether you are planning to develop native applications or wish to move to a cross-platform solution for seamless performance, we can develop mobile apps for both Android and iOS devices as well as deliver hybrid app solutions to meet and exceed your business objectives." imageUrl="https://www.hexabells.com/assets/images/services/Services2.webp" />



    <RightImage  title="Custom Software Development" content="If you are looking for a custom software solution exclusively tailored to fit your requirements that is also ready for the impending future, then we can help. We bring in our extensive experience to design, develop, and deploy cutting-edge software products that add value and give your business a competitive edge." imageUrl="https://www.hexabells.com/assets/images/services/Services3.webp"/>


    <LeftImage title="Product Modernization and Re-engineering" para="" content="Own a legacy platform that no longer serves your fast-scaling operations but is loved by your users? Our skilled developers can transform your traditional websites, web-based portals, and utilities into advanced platforms by adding a modern touch to the interfaces, functionalities, and data." imageUrl="https://www.hexabells.com/assets/images/services/Services4.webp" />




    <RightImage  title="MVP Development" content="Do you require a pilot project to test the market? Looking forward to developing a mobile app or web project from scratch? Or are you planning to create a small in-house portal or a prototype to catch the attention of the investors? HexaBells can provide turnkey MVP solutions for existing businesses as well as startups" imageUrl="https://www.hexabells.com/assets/images/services/Services5.webp"/>


    <LeftImage title="Maintenance and Support" para="" content="We take full responsibility for the performance and quality of our developed solutions and products and we aim for perfection. Once the solution/product is developed and deployed, we provide continuous support and maintenance to help our clients make the most of it." imageUrl="https://www.hexabells.com/assets/images/services/Services6.webp" />


    <HowDoWe para="Development Cycle" para2="Putting good development practices into our operations, which run on agile methodologies, we undertake each project as a challenge and strive to strike gold every time. We have divided our approach into multiple steps, each of which is equally vital to delivering a well-thought of and crafted product that can help you make a difference." head="What Goes into Our" span=" Development Process?" />


    <ContactHere />



   





    </>
  );
}

export default Services;
