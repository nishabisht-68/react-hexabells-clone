import React from "react";
import RightImageButton from "./RightImageButton";
import RightImagePara from "./RightImagePara";
import LeftImagePara from "./LeftImagePara";
import MeetTheTeam from "./MeetTheTeam";
import People from "./People";
import Careers from "./Careers";
import ContactHere from "../Footer/ContactHere";
import VissionMission from "./VissionMission";

function About() {
  return (
    <>
      <RightImageButton
        imgUrl="https://www.hexabells.com/assets/images/about-hexabells.webp"
        para="We are"
        head="Passion combined with experience"
        span=" @Hexabells"
        para2=" FBased out of Noida, India, Hexabells Technologies Pvt. Ltd. is a
            modern-age strategic digital and tech innovation enabler that
            specializes in developing mobile apps, web applications, websites
            and digital solutions powered by AI, Machine Learning , Deep
            Learning and NLP technologies for businesses across the globe."
        buttonText="Learn More"
        caption="Working together to push limits and grow together. "
      />
      <VissionMission />
      <LeftImagePara
        imgUrl="https://www.hexabells.com/assets/images/idea-behind.webp"
        para="The Idea behind"
        heading="HexaBells"
        para1="Being entrepreneurs ourselves, we understand that constant, inside out technology transformation is perhaps the only way businesses can stay afloat and capitalize on the opportunities that the digital age offers."
        para2="However, finding the right platform that can serve with end-to-end solutions to meet the ever-changing tech needs is the biggest struggle for most businesses, and this is where HexaBells stands out."


        para3="Working as a change catalyst, HexaBells is an attempt to make innovative, future-proof technology-driven solutions easily accessible to modern organizations to help them survive and thrive in today’s competitive landscape."
      />
      <RightImagePara imgUrl="https://www.hexabells.com/assets/images/we-craft-solutions-img-about.webp" head="Digital Scientists" para="A Team of" para1="That's how our clientele address us, and honestly, we love it. We are obsessed with creativity, innovation, and technology, challenging what is, while outlining what lies ahead." para2="HexaBells gives us the platform to contemplate genius concepts, brainstorm different ideas, and play with some of the most fascinating technologies, and that gives us the confidence to think out-of-the-box and come up with innovative web solutions to meet and exceed the tech needs of our clients." />

      <MeetTheTeam />
      <People
        imgUrl1="https://www.hexabells.com/assets/images/Deepak-Tiwari.webp"
        head1="Deepak Tiwari"
        para1=" Head Honcho"
        span1="(CEO)"
        imgUrl2="https://www.hexabells.com/assets/images/Isaac-Roy.webp"
        head2="Issac Roy"
        para2="Master Handshaker"
        span2="(HOD of BD)"
        
      />
       {/* <People
        imgUrl1="https://www.hexabells.com/assets/images/Amit-Kumar.webp"
        head1="Amit Kumar"
        para1=" Creative Maestro"
        span1="(UI/UX Designer)"
        imgUrl2="https://www.hexabells.com/assets/images/Afjal-Hussain.webp"
        head2="Afjal Hussain"
        para2="Programmer"
        span2="(Full Stack Developer)"
        
      />  */}

      <Careers />

      <ContactHere />
    </>
  );
}

export default About;
