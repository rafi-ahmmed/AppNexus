import React from 'react';
import Section from './Section';
import footerLogo from '../../assets/logo.png';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaFacebook } from 'react-icons/fa';
const Footer = () => {
   return (
      <div className="bg-[#001931] py-10">
         <footer className="bg-[#001529] text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6">
               <div className="flex flex-col md:flex-row justify-between items-start gap-8 lg:gap-16">
                  <div className="flex-1 space-y-4">
                     <div className="flex items-center gap-2">
                        <img src={footerLogo} className="w-7" alt="" />
                        <h2 className="text-2xl font-bold tracking-tight text-white uppercase">
                           AppNexus
                        </h2>
                     </div>
                     <p className="text-sm leading-relaxed max-w-xs text-slate-400">
                        The ultimate platform for discovering next-gen tools and
                        applications. Empowering your digital workflow with
                        excellence.
                     </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16 flex-2">
                     <div className="space-y-4">
                        <h4 className="text-white font-semibold">Resources</h4>
                        <ul className="space-y-2 text-sm">
                           <li>
                              <a
                                 href="#"
                                 className="hover:text-indigo-400 transition-colors"
                              >
                                 Documentation
                              </a>
                           </li>
                           <li>
                              <a
                                 href="#"
                                 className="hover:text-indigo-400 transition-colors"
                              >
                                 Installation Guide
                              </a>
                           </li>
                           <li>
                              <a
                                 href="#"
                                 className="hover:text-indigo-400 transition-colors"
                              >
                                 API Reference
                              </a>
                           </li>
                        </ul>
                     </div>

                     <div className="space-y-4">
                        <h4 className="text-white font-semibold">Company</h4>
                        <ul className="space-y-2 text-sm">
                           <li>
                              <a
                                 href="#"
                                 className="hover:text-indigo-400 transition-colors"
                              >
                                 About Us
                              </a>
                           </li>
                           <li>
                              <a
                                 href="#"
                                 className="hover:text-indigo-400 transition-colors"
                              >
                                 Careers
                              </a>
                           </li>
                           <li>
                              <a
                                 href="#"
                                 className="hover:text-indigo-400 transition-colors"
                              >
                                 Contact
                              </a>
                           </li>
                        </ul>
                     </div>

                     <div className="space-y-4 col-span-2 sm:col-span-1">
                        <h4 className="text-white font-semibold">
                           Social Links
                        </h4>
                        <div className="flex gap-4">
                           <a
                              href="#"
                              className="p-2 bg-slate-800 hover:bg-indigo-600 rounded-full transition-all group"
                           >
                              <FaSquareXTwitter className="size-5" />
                           </a>
                           <a
                              href="#"
                              className="p-2 bg-slate-800 hover:bg-indigo-600 rounded-full transition-all group"
                           >
                              <IoLogoLinkedin className="size-5" />
                           </a>
                           <a
                              href="#"
                              className="p-2 bg-slate-800 hover:bg-indigo-600 rounded-full transition-all group"
                           >
                              <FaFacebook className="size-5" />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-slate-500">
                  <p>© 2026 HERO.IO - Crafted with Passion</p>
                  <div className="flex gap-6">
                     <a href="#" className="hover:text-white transition-colors">
                        Privacy Policy
                     </a>
                     <a href="#" className="hover:text-white transition-colors">
                        Terms of Service
                     </a>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
};

export default Footer;
