import React from "react";
import { useState } from "react";
import { apple1, apple2, apple3, apple4, apple5 } from "../assets";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [apple1, apple2, apple3, apple4, apple5];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
    console.log(currentSlide);
  };
  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[650px] relative'>
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className='w-[500vw] h-full flex transition-transform duration-1000'
        >
          <img
            src={data[0]}
            className='w-screen h-full object-cover'
            loading='priority'
            alt='apple1'
          />
          <img
            src={data[1]}
            className='w-screen h-full object-cover'
            alt='apple2'
          />
          <img
            src={data[2]}
            className='w-screen h-full object-cover'
            alt='apple3'
          />
          <img
            src={data[3]}
            className='w-screen h-full object-cover'
            alt='apple4'
          />
          <img
            src={data[4]}
            className='w-screen h-full object-cover'
            alt='apple5'
          />
        </div>
        <div className='text-white absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-4'>
          <div
            onClick={prevSlide}
            className='w-14 h-12 border-[1px] border-white flex items-center justify-center
                hover:cursor-pointer hover:bg-gray-400 active:bg-gray-700 duration-300'
          >
            <KeyboardArrowLeftIcon />
          </div>
          <div
            onClick={nextSlide}
            className='w-14 h-12 border-[1px] border-white flex items-center justify-center
                hover:cursor-pointer hover:bg-gray-400 active:bg-gray-700 duration-300'
          >
            <KeyboardArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
