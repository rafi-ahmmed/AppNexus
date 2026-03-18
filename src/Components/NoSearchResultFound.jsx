import React from 'react';

const NoSearchResultFound = () => {
   return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
         <img
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="No Result"
            className="w-32 mb-5 opacity-80"
         />

         <h2 className="text-xl font-semibold text-gray-700">
            No Results Found
         </h2>

         
      </div>
   );
};

export default NoSearchResultFound;
