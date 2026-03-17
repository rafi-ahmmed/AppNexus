import React, { useEffect, useState } from 'react';
import Section from '../../Components/Shared/Section';
import { useLoaderData } from 'react-router';
import InstallationCard from '../../Components/InstallationCard';
import {
   deleteInstalledApp,
   getInstalledApps,
} from '../../utilities/localstorage';

const Installation = () => {
   const allApps = useLoaderData();
   const [installedApps, setInstalledApps] = useState([]);

   useEffect(() => {
      const installedIds = getInstalledApps();
      // console.log(installedIds);
      const installedApps = allApps.filter((app) =>
         installedIds.includes(app.id)
      );
      // console.log(InstalledApps)
      setInstalledApps(installedApps);
   }, [allApps]);





   const handleUninstall = (id) => {
      deleteInstalledApp(id);
      const remainingInstallApps = installedApps.filter((app) => app.id !== id);
      // console.log(remainingInstallApps);
      setInstalledApps(remainingInstallApps)
   };
   return (
      <Section>
         <div className="py-20">
            <h1 className="text-center font-bold text-4xl">
               Your Installed Apps
            </h1>
            <p className="text-center mt-5 text-gray-500">
               Explore All Trending Apps on the Market developed by us
            </p>

            <div className="mt-9 flex justify-between items-center">
               <p className="text-black text-xl  font-semibold">
                  ({installedApps.length}) Apps Found
               </p>
               <select
                  defaultValue="Pick a color"
                  className="select w-44  bg-[#f5f5f5] border border-gray-300"
               >
                  <option disabled={true}>Sort By</option>
                  <option>Crimson</option>
                  <option>Amber</option>
               </select>
            </div>

            {/* Installed Apps */}
            <div className="mt-5 space-y-2.5">
               {installedApps.map((app) => (
                  <InstallationCard
                     key={app.id}
                     app={app}
                     handleUninstall={handleUninstall}
                  />
               ))}
            </div>
         </div>
      </Section>
   );
};

export default Installation;
