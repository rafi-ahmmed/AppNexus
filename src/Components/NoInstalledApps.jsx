import React from 'react';
import { useNavigate } from 'react-router';

const NoInstalledApps = () => {
   const navigate = useNavigate();
   return (
      <div>
         <div className="flex flex-col items-center justify-center py-20 text-center">
            <img
               src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
               alt="No Apps"
               className="w-40 mb-6 opacity-80"
            />

            <h2 className="text-2xl font-bold text-gray-700">
               No Apps Installed
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
               You haven't installed any apps yet. Go explore and install your
               favorite apps!
            </p>

            <button
               onClick={() => navigate('/apps')}
               className="btn bg-linear-to-r from-[#6c36e5] to-[#9b5ff1] text-white border-none mt-6 px-6"
            >
               Browse Apps
            </button>
         </div>
      </div>
   );
};

export default NoInstalledApps;
