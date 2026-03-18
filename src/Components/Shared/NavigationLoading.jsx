import React from 'react';
import logo from '../../assets/logo.png';
const NavigationLoading = () => {
   return (
      <div className="flex justify-center items-center min-h-[68.5vh]">
         {/* <h2>Loading....</h2> */}
         <img className="animate-spin w-[50px]" referrerPolicy='no-referrer' src={logo} alt="" />
      </div>
   );
};

export default NavigationLoading;
