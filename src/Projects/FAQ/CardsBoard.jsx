import React, { useState } from "react";
import FAQ_Cards from "./FAQ_Cards";

const CardsBoard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container mx-auto pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 grid-rows-1 items-center">
        <div className="flex items-center justify-start">
          <img src="/faq.png" alt="FAQ icon" />
        </div>
        <div>
          <FAQ_Cards
            index={0}
            isActive={activeIndex === 0}
            toggleAccordion={toggleAccordion}
            DigitalHead={"What is Digital Marketing"}
            DigitalPara={
              "Digital marketing is the component of marketing that uses the Internet and online-based digital technologies such as desktop computers, mobile phones, and other digital media and platforms to promote products and services."
            }
          />
          <FAQ_Cards
            index={1}
            isActive={activeIndex === 1}
            toggleAccordion={toggleAccordion}
            DigitalHead={"How does SEO work?"}
            DigitalPara={
              "SEO stands for Search Engine Optimization. It is the process of optimizing your website to get organic, or unpaid, traffic from the search engine results page."
            }
          />
          <FAQ_Cards
            index={2}
            isActive={activeIndex === 2}
            toggleAccordion={toggleAccordion}
            DigitalHead={"What is Social Media Marketing?"}
            DigitalPara={
              "Social media marketing refers to the process of gaining traffic or attention through social media sites."
            }
          />
          <FAQ_Cards
            index={3}
            isActive={activeIndex === 3}
            toggleAccordion={toggleAccordion}
            DigitalHead={"What is Email Marketing?"}
            DigitalPara={
              "Email marketing is the act of sending a commercial message, typically to a group of people, using email."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CardsBoard;
