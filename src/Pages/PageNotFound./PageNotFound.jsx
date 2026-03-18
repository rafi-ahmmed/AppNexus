import React from 'react';
import notFound from '../../assets/error-404.png';
import { useNavigate } from 'react-router';
const PageNotFound = () => {
   const navigate = useNavigate();
   return (
      <div>
         <div className="py-20 px-3">
            <div className="flex justify-center items-center">
               <img src={notFound} alt="error image" />
            </div>
            <h2 className="uppercase text-center text-black text-4xl font-semibold mt-5">
               Oops, page not found!{' '}
            </h2>
            <p className="text-gray-400 text-base text-center mt-3">
               The page you are looking for is not available.
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

export default PageNotFound;
