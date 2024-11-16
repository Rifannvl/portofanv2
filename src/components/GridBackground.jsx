// src/components/GridWithElements.jsx

import React from "react";

const GridWithElements = () => {
  return (
    <div className="relative border border-neutral-200">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]"></div>
    </div>
  );
};

export default GridWithElements;
