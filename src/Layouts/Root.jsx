import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

const Root = () => {
   return (
      <div className="container mx-auto">
         <header className='sticky top-0 z-40'>
            <Navbar />
         </header>
         <main className="bg-[#f5f5f5] min-h-[68.5vh] ">
            <Outlet />
         </main>
         <footer>
            <Footer />
         </footer>
      </div>
   );
};

export default Root;
