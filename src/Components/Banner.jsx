import React from 'react';
import bannerImg from '../assets/hero.png';

const Banner = () => {
   return (
      <div className="pt-24 pb-28">
         {/* Texts */}
         <div className="px-1 md:px-1 lg:px-0">
            <h1 className="text-5xl md:text-7xl text-center font-semibold max-w-[597px] mx-auto">
               We Build{' '}
               <span className="font-extrabold bg-linear-to-r from-[#6c36e5] to-[#9b5ff1] bg-clip-text text-transparent">
                  Productive
               </span>{' '}
               Apps
            </h1>
            <p className="text-center mt-5 max-w-4xl mx-auto text-gray-500">
               At HERO.IO, we craft innovative apps designed to make everyday
               life simpler, smarter, and more exciting.Our goal is to turn your
               ideas into digital experiences that truly make an impact.
            </p>
         </div>
         <div className="flex justify-center items-center gap-5 mt-7">
            <button className="btn shadow">
               <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/fluency/48/google-play.png"
                  alt="google-play"
               />
               Google Play
            </button>
            <button className="btn shadow">
               <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/color/48/apple-app-store--v3.png"
                  alt="apple-app-store--v3"
               />
               App Store
            </button>
         </div>

         <div className="flex justify-center items-center mt-8 px-2 md:px-3 lg:px-0">
            <img src={bannerImg} alt="" />
         </div>

         <div className="mt-0.5 bg-linear-to-t from-[#9b5ff1] to-[#6c36e5] py-20">
            <h2 className="text-white text-4xl font-bold text-center">
               Trusted by Millions, Built for You
            </h2>

            {/* Stats */}
            <div className="text-white mt-9 flex flex-wrap items-center justify-center gap-10 md:gap-14 lg:gap-36">
               <div>
                  <p className="text-center">Total Downloads</p>
                  <h4 className="text-6xl font-extrabold text-center py-4">
                     29.6M
                  </h4>
                  <p className="text-center">21% More Then Last Month</p>
               </div>
               <div>
                  <p className="text-center">Total Reviews</p>
                  <h4 className="text-6xl font-extrabold text-center py-4">
                     206K
                  </h4>
                  <p className="text-center">46% More Then Last Month</p>
               </div>
               <div>
                  <p className="text-center">Active Apps</p>
                  <h4 className="text-6xl font-extrabold text-center py-4">
                     132+
                  </h4>
                  <p className="text-center">31 More Will Lunch</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
