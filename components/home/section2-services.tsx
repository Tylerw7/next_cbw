"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Check out our <span>Services</span>.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Custom Cabinets",
    title: "You can do more with AI.",
    src: "/images/kitchen.jpg",
    content: '/kitchen',
  },
  {
    category: "Closet Systems",
    title: "Enhance your productivity.",
    src: "/images/kitchen2.jpg",
    content: <DummyContent />,
  },
  {
    category: "Out Door Kitchens",
    title: "Launching the new Apple Vision Pro.",
    src: "/images/outdoor.jpg",
    content: <DummyContent />,
  },

  {
    category: "Built-In Entertainment Systems",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/images/outdoor.jpg",
    content: <DummyContent />,
  },
  {
    category: "YorkTowne Dealer",
    title: "Photography just got better.",
    src: "/images/outdoor.jpg",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/images/outdoor.jpg",
    content: <DummyContent />,
  },
];
