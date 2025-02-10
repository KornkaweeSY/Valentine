"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [yesSize, setYesSize] = useState(1);

  const handleNoClick = () => {
    setYesSize(yesSize + 0.8);
  }

  return (
    <div className="container flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="flex justify-center">
          <Image
            src="/image/milk-and-mocha.gif"
            alt="Happy Valentine's Day"
            width={150}
            height={100}
          />
          {/* <Image src="/image/milk-and-mocha-chair.gif" width={190} height={80} /> */}
        </div>
        <div className="flex justify-center gap-2 mt-1">
          <h1 className="text-4xl font-bold">You will be my Valentine </h1>
          <Image src="/image/heart.png" width={40} height={10} />
        </div>
        <div className="mt-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform duration-300" style={{ transform: `scale(${yesSize})`}}>
            Yes ❤️
          </button>
          <button onClick={handleNoClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
            No !!
          </button>
        </div>
      </div>
    </div>
  );
}
