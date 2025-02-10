"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [yesSize, setYesSize] = useState(1);
  const [noPosition, setNoPosition] = useState(0);
  const [topPosition, setTopPosition] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);

  const images = [
    { src: "/image/milk-and-mocha.gif", alt: "Happy Valentine's Day", width: 150, height: 100 },
    { src: "/image/milk-and-mocha-please.gif", alt: "Mochi Cat", width: 190, height: 80 },
    { src: "/image/mocha-sebusun.gif", alt: "Happy Valentine's Day", width: 150, height: 100 },
    { src: "/image/khersi.gif", alt: "khersi", width: 190, height: 80 },
  ];
  
  const imagesYes = [
    { src: "/image/cute-bears-love.gif", alt: "Mochi Cat", width: 190, height: 80 },
  ]

  const handleNoClick = () => {
    setYesSize(yesSize + 0.8);
    setNoPosition(noPosition + 40);
    setTopPosition(topPosition - 20);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setNoClickCount(noClickCount + 1);
  }

  const handleYesClick = () => {
    setIsYesClicked(true);
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-full relative bg-pink-50 p-4">
      <div className="text-center relative z-10 max-w-4xl w-full mx-auto">
        {!isYesClicked && (
          <>
            <div 
              className="flex justify-center mb-4 sm:mb-6" 
              style={{ transform: `translateY(${topPosition}px)`, transition: 'transform 0.3s' }}
            >
              {images.map((image, index) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-[100px] sm:w-[150px] md:w-[190px] h-auto"
                  style={{
                    opacity: index === currentImageIndex ? 1 : 0,
                    transition: 'opacity 0.3s',
                    position: index === 0 ? 'relative' : 'absolute'
                  }}
                />
              ))}
            </div>
            <div 
              className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-1 px-4" 
              style={{ transform: `translateY(${topPosition}px)`, transition: 'transform 0.3s' }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center">
                You will be my Valentine 
              </h1>
              <Image 
                src="/image/heart.png" 
                alt="Heart" 
                width={40} 
                height={10}
                className="w-[30px] sm:w-[40px] h-auto" 
              />
            </div>
            <div className="mt-5 space-y-4 sm:space-y-0">
              <button 
                onClick={handleYesClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform duration-300 text-base sm:text-lg" 
                style={{ transform: `scale(${yesSize})`}}
              >
                Yes ❤️
              </button>
              {noClickCount < 4 && (
                <button 
                  onClick={handleNoClick} 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 transition-all duration-300 text-base sm:text-lg" 
                  style={{ transform: `translateX(${noPosition}px)` }}
                >
                  No !!
                </button>
              )}
            </div>
          </>
        )}
        
        {isYesClicked && (
          <>
            <div className="flex flex-col justify-center items-center space-y-4 p-4">
              <Image 
                src="/image/cute-bears-love.gif" 
                alt="Heart" 
                width={200} 
                height={200}
                className="w-[150px] sm:w-[200px] md:w-[250px] h-auto" 
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4 text-black">
                Yey, Love Love na kab ❤️❤️❤️
              </h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
