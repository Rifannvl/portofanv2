import React, { useState } from "react";

const MagicCard = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    // Get the bounding rectangle of the card to calculate relative mouse position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = clientX - rect.left; // X position relative to the card
    const y = clientY - rect.top; // Y position relative to the card
    setMousePosition({ x, y });
  };

  return (
    <div className="mx-auto bg-white rounded-lg border">
      <div
        className="group relative overflow-hidden rounded-lg border-gray-200 shadow-lg transition-transform transform hover:scale-100"
        onMouseMove={handleMouseMove}
      >
        {/* Background Gradient with Mouse Tracking Effect */}
        <div
          className="absolute inset-0 transition duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 149, 237, 0.4), rgba(100, 149, 237, 0) 60%)`, // More intense blue
            pointerEvents: "none", // Prevent the gradient from blocking mouse events
          }}
        ></div>

        {/* Card Content */}
        <div className="relative p-6">{children}</div>
        {/* bg grid */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]"></div>

        {/* Moving Border Animation */}
        <div
          className="absolute inset-0 border-2 rounded-lg border-transparent 
            animate-move-border"
        ></div>
      </div>
    </div>
  );
};

export default MagicCard;
