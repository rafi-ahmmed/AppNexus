import React from 'react';
import { Link, NavLink } from 'react-router';
import navLogo from '../../assets/logo.png';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
   const navLinks = (
      <>
         <li className="">
            <NavLink
               className={({ isActive }) =>
                  isActive
                     ? 'text-purple-600 underline font-medium'
                     : 'font-medium'
               }
               to={'/'}
            >
               Home
            </NavLink>
         </li>
         <li>
            <NavLink
               className={({ isActive }) =>
                  isActive
                     ? 'text-purple-600 underline font-medium'
                     : 'font-medium'
               }
               to={'/apps'}
            >
               Apps
            </NavLink>
         </li>
         <li>
            <NavLink
               to={'installation'}
               className={({ isActive }) =>
                  isActive
                     ? 'text-purple-600 underline font-medium'
                     : 'font-medium'
               }
            >
               Installation
            </NavLink>
         </li>
      </>
   );
   return (
      <div className="border-slate-100 border-b bg-base-100">
         <div className="max-w-357.5 mx-auto navbar  py-4">
            <div className="navbar-start">
               <div className="dropdown">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost lg:hidden"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        {' '}
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />{' '}
                     </svg>
                  </div>
                  <ul
                     tabIndex="-1"
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                     {navLinks}
                  </ul>
               </div>
               <Link
                  to={'/'}
                  className="   uppercase flex justify-start items-center gap-1"
               >
                  <img className="w-10" src={navLogo} alt="" />
                  <span className="font-bold text-xl bg-linear-to-r from-[#6c36e5] to-[#9b5ff1] bg-clip-text text-transparent">
                     AppNexus
                  </span>
               </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
            <div className="navbar-end">
               <a
                  target="_blank"
                  href="https://github.com/rafi-ahmmed/Hero-IO"
                  className="btn bg-linear-to-r from-[#6c36e5] to-[#9b5ff1] text-white"
               >
                  <FaGithub className="size-4" />
                  Contribute
               </a>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
