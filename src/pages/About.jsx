import React from "react";

export default function About() {
  return (
    <div className="container mx-auto">
      <div className="mt-16">
        <div>
          <h1 className="text-2xl font-semibold">About me</h1>
          <p>short story about me</p>
        </div>
        <hr className="border-t-2 border-dotted shadow-inherit border-gray-400 my-4" />
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">My Tiktok</h1>
          <p>find me on tiktok</p>
        </div>
        <div>
          <iframe
            src="https://www.tiktok.com/embed/@rvnll_"
            width="830"
            height="480"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <hr className="border-t-2 border-dotted shadow-inherit border-gray-400 my-4" />
        </div>

        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]"></div>
      </div>
    </div>
  );
}
