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
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-textColor font-sans">
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
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
        Every solution is customized to meet your business&apos;s specific needs
        and objectives.
      </p>
    </div>
  ),
  "Seasoned Professionals": (
    <div>
      {/* <h3 className="text-lg font-bold">Seasoned Professionals</h3> */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
        Our team brings years of specialized experience to deliver accurate,
        customized financial models.
      </p>
    </div>
  ),
  "Quality Meets Affordability": (
    <div>
      {/* <h3 className="text-lg font-bold">Quality Meets Affordability</h3> */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
        We deliver high-quality financial models at unbeatable prices - making
        premium results accessible without the premium price tag.
      </p>
    </div>
  ),
  "Clear and Actionable Insights": (
    <div>
      {/* <h3 className="text-lg font-bold">Clear and Actionable Insights</h3> */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
        We make complex data easy to understand, helping you make confident
        decisions.
      </p>
    </div>
  ),
  "Long-Term Partnerships": (
    <div>
      {/* <h3 className="text-lg font-bold">Long-Term Partnerships</h3> */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
        We build lasting relationships, focused on your continued growth and
        success.
      </p>
    </div>
  ),
  "Future-Ready Solutions": (
    <div>
      {/* <h3 className="text-lg font-bold">Future-Ready Solutions</h3> */}
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
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
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: content["Tailored Financial Models"],
  },
  {
    icon: <FaProductHunt className="text-4xl text-neutral-700" />,
    title: "Seasoned Professionals",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: content["Seasoned Professionals"],
  },
  {
    icon: <FaChartLine className="text-4xl text-neutral-700" />,
    title: "Quality Meets Affordability",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: content["Quality Meets Affordability"],
  },
  {
    icon: <FaUsers className="text-4xl text-neutral-700" />,
    title: "Clear and Actionable Insights",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: content["Clear and Actionable Insights"],
  },
  {
    icon: <FaLaptop className="text-4xl text-neutral-700" />,
    title: "Long-Term Partnerships",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: content["Long-Term Partnerships"],
  },
  {
    icon: <FaApple className="text-4xl text-neutral-700" />,
    title: "Future-Ready Solutions",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: content["Future-Ready Solutions"],
  },
];
