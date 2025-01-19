"use client";

import { Carousel, Card } from "../ui/AppleCurouselCard";
import {
  FaApple,
  FaProductHunt,
  FaChartLine,
  FaUsers,
  FaLaptop,
} from "react-icons/fa"; // Example icons

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-12">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-textColor font-sans text-center">
        Why ModVisor is Your Go-To Partner for Business Success!
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// Content for each card
const content = {
  "Tailored Financial Models": (
    <div>
      {/* <h3 className="text-lg font-bold">Tailored Financial Models</h3> */}
      <p className="text-white text-base md:text-2xl font-sans">
        Every solution is customized to meet your business&apos;s specific needs
        and objectives.
      </p>
    </div>
  ),
  "Seasoned Professionals": (
    <div>
      {/* <h3 className="text-lg font-bold">Seasoned Professionals</h3> */}
      <p className="text-white text-base md:text-2xl font-sans">
        Our team brings years of specialized experience to deliver accurate,
        customized financial models.
      </p>
    </div>
  ),
  "Quality Meets Affordability": (
    <div>
      {/* <h3 className="text-lg font-bold">Quality Meets Affordability</h3> */}
      <p className="text-white text-base md:text-2xl font-sans">
        We deliver high-quality financial models at unbeatable prices - making
        premium results accessible without the premium price tag.
      </p>
    </div>
  ),
  "Clear and Actionable Insights": (
    <div>
      {/* <h3 className="text-lg font-bold">Clear and Actionable Insights</h3> */}
      <p className="text-white text-base md:text-2xl font-sans">
        We make complex data easy to understand, helping you make confident
        decisions.
      </p>
    </div>
  ),
  "Long-Term Partnerships": (
    <div>
      {/* <h3 className="text-lg font-bold">Long-Term Partnerships</h3> */}
      <p className="text-white text-base md:text-2xl font-sans">
        We build lasting relationships, focused on your continued growth and
        success.
      </p>
    </div>
  ),
  "Future-Ready Solutions": (
    <div>
      {/* <h3 className="text-lg font-bold">Future-Ready Solutions</h3> */}
      <p className="text-white text-base md:text-2xl font-sans">
        Our models are designed to drive growth and adapt as your business
        evolves.
      </p>
    </div>
  ),
};

// Updated data with icons
const data = [
  {
    icon: <FaApple className="text-4xl text-neutral-700" />,
    title: "Tailored Financial Models",
    src: "/img/11.jpg",
    content: content["Tailored Financial Models"],
  },
  {
    icon: <FaProductHunt className="text-4xl text-neutral-700" />,
    title: "Seasoned Professionals",
    src: "/img/2.jpg",
    content: content["Seasoned Professionals"],
  },
  {
    icon: <FaChartLine className="text-4xl text-neutral-700" />,
    title: "Quality Meets Affordability",
    src: "/img/3.jpg",
    content: content["Quality Meets Affordability"],
  },
  {
    icon: <FaUsers className="text-4xl text-neutral-700" />,
    title: "Clear and Actionable Insights",
    src: "/img/4.jpg",
    content: content["Clear and Actionable Insights"],
  },
  {
    icon: <FaLaptop className="text-4xl text-neutral-700" />,
    title: "Long-Term Partnerships",
    src: "/img/5.jpg",
    content: content["Long-Term Partnerships"],
  },
  {
    icon: <FaApple className="text-4xl text-neutral-700" />,
    title: "Future-Ready Solutions",
    src: "/img/66.jpg",
    content: content["Future-Ready Solutions"],
  },
];
