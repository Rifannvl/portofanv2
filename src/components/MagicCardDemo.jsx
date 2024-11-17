import React from "react";
import Card from "./Card"; // Pastikan path ini sesuai dengan lokasi file Card

const MagicCardDemo = () => {
  return (
    <div className=" mx-auto w-full grid grid-cols-2 gap-5">
      <Card className="cursor-pointer flex-col">
        <div className="mx-auto w-36 my-4">
          <img
            src="https://cdn-icons-png.freepik.com/256/13587/13587563.png?ga=GA1.1.135343962.1731777400&semt=ais_hybrid"
            alt=""
          />
        </div>
        <h1 className="font-bold text-xl">Web Responsive</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          natus.
        </p>
      </Card>
      <Card className="cursor-pointer flex-col">
        <div className="mx-auto w-36 my-4">
          <img
            src="https://cdn-icons-png.freepik.com/256/13587/13587563.png?ga=GA1.1.135343962.1731777400&semt=ais_hybrid"
            alt=""
          />
        </div>
        <h1 className="font-bold text-xl">Web Responsive</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          natus.
        </p>
      </Card>
      <Card className="cursor-pointer flex-col">
        <div className="mx-auto w-36 my-4">
          <img
            src="https://cdn-icons-png.freepik.com/256/13587/13587563.png?ga=GA1.1.135343962.1731777400&semt=ais_hybrid"
            alt=""
          />
        </div>
        <h1 className="font-bold text-xl">Web Responsive</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          natus.
        </p>
      </Card>
      <Card className="cursor-pointer flex-col">
        <div className="mx-auto w-36 my-4">
          <img
            src="https://cdn-icons-png.freepik.com/256/13587/13587563.png?ga=GA1.1.135343962.1731777400&semt=ais_hybrid"
            alt=""
          />
        </div>
        <h1 className="font-bold text-xl">Web Responsive</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          natus.
        </p>
      </Card>
    </div>
  );
};

export default MagicCardDemo;
