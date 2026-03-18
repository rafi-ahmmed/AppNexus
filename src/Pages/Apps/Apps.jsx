import React, { useEffect, useState } from 'react';
import Section from '../../Components/Shared/Section';
import AppCard from '../../Components/Shared/AppCard';
import DataLoading from '../../Components/Shared/DataLoading';
import AppNotFound from '../../Components/AppNotFound';
import NoSearchResultFound from '../../Components/NoSearchResultFound';

const Apps = () => {
   const [allApps, setAllApps] = useState([]);
   const [displayApps, setDisplayApps] = useState([]);
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
      fetch('/AppData.json')
         .then((res) => res.json())
         .then((data) => {
            setAllApps(data);
            setDisplayApps(data);
            setLoading(false);
         });
   }, [setAllApps, setLoading]);

   const handleSearch = (e) => {
      setLoading(true);
      const searchValue = e.target.value.toLowerCase();
      // console.log(searchValue.length);
      if (searchValue.length === 0) {
         setDisplayApps(allApps);
         setLoading(false);
         return;
      }
      const searchData = allApps.filter((app) =>
         app.title.toLowerCase().includes(searchValue)
      );
      setDisplayApps(searchData);
      setLoading(false);
   };
   return (
      <Section>
         <div className="py-20">
            <h1 className="text-center font-bold text-4xl">
               Our All Applications
            </h1>
            <p className="text-center mt-5 text-gray-500">
               Explore All Apps on the Market developed by us. We code for
               Millions
            </p>

            <div className="my-5 flex items-center justify-center flex-wrap md:justify-between lg:justify-between gap-y-2.5">
               <p className="text-black text-xl font-semibold">
                  ({displayApps.length}) Apps Found
               </p>
               <div>
                  <label className="input">
                     <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                     >
                        <g
                           strokeLinejoin="round"
                           strokeLinecap="round"
                           strokeWidth="2.5"
                           fill="none"
                           stroke="currentColor"
                        >
                           <circle cx="11" cy="11" r="8"></circle>
                           <path d="m21 21-4.3-4.3"></path>
                        </g>
                     </svg>
                     <input
                        onChange={(e) => handleSearch(e)}
                        type="search "
                        className="grow"
                        placeholder="Search by App Title..."
                     />
                  </label>
               </div>
            </div>

            {/* All Apps card */}
            {loading ? (
               <DataLoading />
            ) : displayApps.length !== 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {displayApps.map((app) => (
                     <AppCard key={app.id} app={app} />
                  ))}
               </div>
            ) : (
               <NoSearchResultFound/>
            )}
         </div>
      </Section>
   );
};

export default Apps;
