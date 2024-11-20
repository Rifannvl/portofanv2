import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion

export default function About() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <motion.div
      className="container mx-auto"
      initial={{ opacity: 0, x: 40 }} // Element starts from the right side (off-screen)
      animate={{ opacity: 1, x: 0 }} // Element becomes fully visible and moves to its original position
      exit={{ opacity: 0, x: 40 }} // When exiting, the element fades out and moves off-screen to the right
      transition={{
        duration: 1.2, // Smooth transition duration (slightly slower)
        ease: [0.25, 0.1, 0.25, 1], // EaseInOut curve for a smooth, natural movement
      }}
    >
      <div className="mt-16">
        <div>
          <h1 className="text-2xl font-semibold">About me</h1>
          <p>short story about me</p>
          <h5 className="mt-4 text-md">
            I am Rifan Afendi, a web developer with an educational background
            from SMK Negeri 1 Simra, specializing in software development. After
            completing my formal education, I continued my studies in
            programming at Neuversity, focusing on frontend development. This
            course enhanced my skills in building responsive, visually
            appealing, and functional user interfaces. Before venturing into web
            development, I gained experience as an admin at a travel agency
            specializing in Umrah services, where I managed various operational
            tasks and communications. This experience helped me develop strong
            teamwork skills and the ability to manage information flow
            efficiently. As I honed my programming skills, I had the opportunity
            to teach and mentor employees at PT Gawe Bechik Nadhah Anugrah
            (GENAH) in the areas of marketing and advertising. This role
            sharpened my communication skills and increased team productivity
            through effective use of technology. With a solid technical
            foundation and diverse experience, I am comfortable working
            independently or in teams, and I am always eager to adapt to new
            challenges and technologies in the ever-evolving tech landscape.
          </h5>
        </div>
        <hr className="border-t-2 border-dotted shadow-inherit border-gray-400 my-4" />
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">My Tiktok</h1>
          <p>Find me on TikTok</p>
        </div>
        <div>
          <iframe
            src="https://www.tiktok.com/embed/@rvnll_"
            width="830"
            height="480"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <hr className="border-t-2 border-dotted shadow-inherit border-gray-400 my-4" />
        </div>

        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]"></div>
      </div>
    </motion.div>
  );
}
