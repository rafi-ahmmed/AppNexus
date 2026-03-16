import React, { use } from 'react';
import AppCard from './Shared/AppCard';
import { Link } from 'react-router';

const HomeApps = ({ getAppData }) => {
   const apps = use(getAppData);
   const limitedApps = apps.slice(0, 8);

   return (
      <div>
         <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {limitedApps.map((app) => (
               <AppCard key={app.id} app={app} />
            ))}
         </div>
         <div className="flex justify-center items-center mt-9 pb-20">
            <Link
               to={'/apps'}
               className="btn px-10 bg-linear-to-r from-[#6c36e5] to-[#9b5ff1] text-white"
            >
               Show All
            </Link>
         </div>
      </div>
   );
};

export default HomeApps;
