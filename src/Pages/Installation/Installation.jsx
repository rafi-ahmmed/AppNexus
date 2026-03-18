import React, { useEffect, useState } from 'react';
import Section from '../../Components/Shared/Section';
import { useLoaderData } from 'react-router';
import InstallationCard from '../../Components/InstallationCard';
import {
   deleteInstalledApp,
   getInstalledApps,
} from '../../utilities/localstorage';
import { toast } from 'react-toastify';
import NoInstalledApps from '../../Components/NoInstalledApps';
import DataLoading from '../../Components/Shared/DataLoading';

const Installation = () => {
   const allApps = useLoaderData();
   const [installedApps, setInstalledApps] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      const installedIds = getInstalledApps();
      // console.log(installedIds);
      const installedApps = allApps.filter((app) =>
         installedIds.includes(app.id)
      );
      // console.log(InstalledApps)
      setInstalledApps(installedApps);
      setLoading(false);
   }, [allApps]);

   const handleUninstall = (id) => {
      deleteInstalledApp(id);
      const remainingInstallApps = installedApps.filter((app) => app.id !== id);
      // console.log(remainingInstallApps);
      setInstalledApps(remainingInstallApps);
      toast.success('App uninstalled successfully!', {
         position: 'top-right',
         autoClose: 2000,
      });
   };

   const handleSortInstalledApps = (e) => {
      setLoading(true);
      const selectedValue = e.target.value;
      if (selectedValue === 'ascending') {
         const lowToHigh = [...installedApps].sort((a, b) => a.size - b.size);
         setInstalledApps(lowToHigh);
         setLoading(false);
      } else {
         const highToLow = [...installedApps].sort((a, b) => b.size - a.size);
         setInstalledApps(highToLow);
         setLoading(false);
      }
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
                  disabled={installedApps.length===0}
                  onChange={(e) => handleSortInstalledApps(e)}
                  className="select w-44 bg-[#f5f5f5] border border-gray-300"
                  defaultValue="default"
               >
                  <option value="default" disabled>
                     Sort by Size
                  </option>
                  <option value="ascending">Low to High</option>
                  <option value="descending">High to Low</option>
               </select>
            </div>

            {/* Installed Apps */}
            {installedApps.length === 0 ? (
               <NoInstalledApps />
            ) : (
               <div className="mt-5 space-y-2.5">
                  {installedApps.map((app) => (
                     <InstallationCard
                        key={app.id}
                        app={app}
                        handleUninstall={handleUninstall}
                     />
                  ))}
               </div>
            )}
         </div>
      </Section>
   );
};

export default Installation;
