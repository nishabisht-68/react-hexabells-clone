import React from "react";
import HeroSection from "./HeroSection";
import VedioSection from "./VedioSection";
import WeAreFocused from "./WeAreFocused";
import ImageTransition from "./ImageTransition";
import HowDoWe from "./HowDoWe";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import ContactHere from "../Footer/ContactHere"
import Newsletter from "../Footer/Newsletter";

function Home() {
  console.log("I am the home and i am rendering by default")
  return (
    <>
      <HeroSection />
      <VedioSection />
      <WeAreFocused
        para="We are Focused yet Adaptive"
        head="As we foster"
        span=" Intelligence, Creativity, and Novelty"
        secpara="To unleash your business potential and capabilities we have our core #4."
      />
      <ImageTransition />
      <HowDoWe para="How do we do it?" head="We spent our most of the time" span=" doing" para2="When two businesses collaborate impartially, they typically produce excellent products."/>
      <LeftImage
        imageUrl="https://www.hexabells.com/assets/images/Data-Analysis.webp"
        title="Predictive Analytics"
        content="Efficient data analytics help us set up meaningful and tangible objectives for your success. It further enables us in tracking the progress report of your business growth in an easy-to-understand way. For us, driving new sales and acquiring new customers is the only KPI we believe in."
      />
      <RightImage
        imageUrl="https://www.hexabells.com/assets/images/Strategic-Planning.webp"
        title="Strategic Planning"
        content="Equipping you with the right set of technology and resources to strengthen the foundation and guide you in the process to help you make the most of your business operations. We are confident that we have the required expertise and experience to curate innovative strategies to help you make a difference."
      />
      <LeftImage
        imageUrl="https://www.hexabells.com/assets/images/Project-Management.webp"
        title="Project Management"
        content="Efficient project management remains at the heart of our operations and we take pride in following the best development practices to make things work wonders. Not only do we stick to our plans, but we also keep you posted throughout so that you are updated about the process and the progress."
      />
      <RightImage
        imageUrl="https://www.hexabells.com/assets/images/Outcome-Evaluation.webp"
        title="Outcome Evaluation"
        content="Multiple A/B testing helps us evaluate different strategies and techniques, allowing us to formulate the most suitable plans to promote sustainable results. What’s more, customized checklists with different KPIs, factors and metrics help us analyze and work on special areas to improve user experience."
      />

      <WeAreFocused
        para="Feeds | Articles | Blogs"
        head="We publish more when you like more,
through our creatives"
        span=" Get inspired"
      />
      <ContactHere />
      <Newsletter />
    </>
  );
}

export default Home;
