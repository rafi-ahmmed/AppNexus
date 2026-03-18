import { Download } from 'lucide-react';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const InstallationCard = ({ app, handleUninstall }) => {
   const {
      id: appId,
      title,
      companyName,
      image,
      description,
      size,
      reviews,
      ratingAvg,
      downloads,
      ratings,
   } = app;
   return (
      <div>
         <div className="bg-white p-4 rounded flex justify-between items-center">
            <div className="flex items-center justify-start gap-4">
               {/* img */}
               <div>
                  <img
                     src={image}
                     alt={title}
                     className="w-[80px] h-[80px] rounded-md"
                  />
               </div>
               {/* text div */}
               <div className="">
                  <h2 className="text-md font-medium text-black">{title}</h2>
                  <div className="flex flex-wrap justify-start items-center gap-5 mt-3">
                     <h6 className="text-green-300 font-medium flex items-center gap-1">
                        <Download />
                        <span>{downloads}</span>
                     </h6>
                     <h6 className="text-amber-500 font-medium flex items-center gap-1">
                        <FaStar />
                        <span>{ratingAvg}</span>
                     </h6>
                     <h6 className="text-gray-400 font-medium ">{size} MB</h6>
                  </div>
               </div>
            </div>
            <div>
               <button
                  onClick={() => handleUninstall(appId)}
                  className="btn text-white bg-[#00d390]"
               >
                  Uninstall
               </button>
            </div>
         </div>
      </div>
   );
};

export default InstallationCard;
