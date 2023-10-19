import React from "react";
import LeftImageButton from "./LeftImageButton";
import OurFocused from "./OurFocused";
import WeAreFocused from "../Home/WeAreFocused";
import ContactHere from "../Footer/ContactHere";


function Expertise(){
    return(
        <>
        <LeftImageButton imgUrl="https://www.hexabells.com/assets/images/expertise-banner.webp" para="Our " head="Driven by data, fueled by passion" span="Expertise" para2="We collaborate with the top businesses in the world across a range of sectors and industries to help them stay on top of the rapidly evolving technology trends. Let us assist you in connecting your brand with customers and nurturing an unmatched user experience." buttonText="All Insustries" caption="" />
    

        <OurFocused />
        <WeAreFocused
        para="Our tech. stack"
        head="Technologies and Tools "
        span="we are well versed in"
        secpara="Our developers use the best available technologies and embrace new ones."
      />

      <ContactHere />

      


        </>
    )
}


export default Expertise;