import React, { Suspense } from 'react';
import Banner from '../../Components/Banner';
import Section from '../../Components/Shared/Section';
import AppsPage from '../Apps/Apps';
import Apps from '../Apps/Apps';
import HomeApps from '../../Components/HomeApps';

const HomePage = () => {
   const getAppData = fetch('/AppData.json').then((res) => res.json());
   return (
      <div>
         <Banner />
         {/* Home Apps */}
         <Section>
            <h2 className="text-center text-4xl font-semibold">
               Trending Apps
            </h2>
            <p className="text-center text-gray-500 mt-4">
               Explore All Trending Apps on the Market developed by us
            </p>
            <Suspense fallback={<p>Loading.....</p>}>
               <HomeApps getAppData={getAppData} />
            </Suspense>
         </Section>
      </div>
   );
};

export default HomePage;
