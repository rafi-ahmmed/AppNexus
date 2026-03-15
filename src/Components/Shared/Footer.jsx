import React from 'react';
import Section from './Section';
import footerLogo from '../../assets/logo.png';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
const Footer = () => {
   return (
      <div className="bg-[#001931] py-10">
         <Section>
            <div className="flex justify-between items-center">
               <div>
                  <h6
                     to={'/'}
                     className="   uppercase flex justify-start items-center gap-1"
                  >
                     <img className="w-10" src={footerLogo} alt="" />
                     <span className="font-bold text-xl text-white">
                        Hero.IO
                     </span>
                  </h6>
               </div>
               <div>
                  <p className="text-lg text-white">Social Link</p>
                  <div className="text-white flex items-center gap-3 mt-2.5">
                     <a href="">
                        <FaSquareXTwitter className="size-5" />
                     </a>
                     <a href="">
                        <IoLogoLinkedin className="size-5" />
                     </a>
                     <a href="">
                        <FaFacebook className="size-5" />
                     </a>
                  </div>
               </div>
            </div>
            <div className="divider divider-info"></div>
            <p className="text-center text-white">
               Copyright © 2025 - All right reserved
            </p>
         </Section>
      </div>
   );
};

export default Footer;
