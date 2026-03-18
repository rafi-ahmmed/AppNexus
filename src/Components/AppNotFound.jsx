import React from 'react';

import appNotFound from '../assets/App-Error.png';
import { useNavigate } from 'react-router';

const AppNotFound = () => {
   const navigate = useNavigate();
   return (
      <div>
         <div className="">
            <div className="flex justify-center items-center">
               <img src={appNotFound} alt="error image" />
            </div>
            <h2 className="uppercase text-center text-black text-4xl font-semibold mt-5">
               Opps!! App Not Found
            </h2>
            <p className="text-gray-400 text-base text-center mt-3">
               The App you are requesting is not found on our system. please try
               another apps
            </p>
            <div className="flex justify-center items-center mt-4">
               <button
                  onClick={() => navigate(-1)}
                  className="btn px-8 bg-linear-to-r from-[#6c36e5] to-[#9b5ff1] text-white"
               >
                  Go Back!
               </button>
            </div>
         </div>
      </div>
   );
};

export default AppNotFound;
