import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import TypingEffectComponent from "../components/Typingtext";

import { useEffect } from "react";
import Card from "../components/Card";
import MagicCardDemo from "../components/MagicCardDemo";

export default function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <motion.div
      className="container mx-auto"
      initial={{ opacity: 0, x: 40 }} // Initial state: element is invisible and slightly off-screen to the right
      animate={{ opacity: 1, x: 0 }} // End state: element becomes visible and returns to original position
      exit={{ opacity: 0, x: 40 }} // Exit animation: element fades out and moves off-screen to the right (if using routing)
      transition={{
        duration: 1.2, // Slightly longer for a smoother transition
        ease: [0.25, 0.1, 0.25, 1], // EaseInOut easing for a more natural feel
      }}
    >
      <div className="my-16">
        <TypingEffectComponent />
        <ul className="flex flex-row pl-1 space-x-6 list-disc list-inside">
          <li>based in Yogyakarta</li>
          <li>remote worker</li>
        </ul>

        <p className="mt-4">
          I am a web developer with a focus on front-end development. I am
          passionate about creating user-friendly and visually appealing web
          applications.
        </p>
        <hr className="border-t-2 shadow-inherit border-gray-400 my-4" />
      </div>
      <div className="mb-4">
        <div>
          <div className="my-4">
            <h1 className="text-2xl font-semibold">Services</h1>
            <p>the service I provide</p>
          </div>
        </div>
        <hr className="border-t-2 shadow-inherit border-gray-400 my-4" />
      </div>
      <div className="my-10">
        <MagicCardDemo />
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]"></div>
    </motion.div>
  );
}
