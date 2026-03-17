import { useLoaderData, useParams } from 'react-router';
import Section from '../../Components/Shared/Section';
import { Download } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png';
import RatingChart from '../../Components/RatingChart';
import { useEffect, useState } from 'react';
import {
   addLocalstorage,
   getIsInstalledApp,
} from '../../utilities/localstorage';
import { toast } from 'react-toastify';

const AppDetails = () => {
   const apps = useLoaderData();
   const { id } = useParams();
   const appDetails = apps.find((app) => app.id == parseInt(id));
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
   } = appDetails;
   const [install, setInstall] = useState(false);

   const handleInstall = (id) => {
      setInstall(true);
      addLocalstorage(id);
      toast.success(`${title} is successfully installed!`, {
         autoClose: 2000,
      });
   };

   useEffect(() => {
      const setDownloadStatus = () => {
         const installedStatus = getIsInstalledApp(appId);
         // console.log('download Status', installedStatus);
         setInstall(installedStatus);
      };
      setDownloadStatus();
   }, [appId]);
   console.log('installed Status', install);
   return (
      <Section>
         <div className="py-20">
            <div className="grid  grid-cols-11 gap-5 lg:gap-10">
               <div className="col-span-11 md:col-span-4 lg:col-span-4">
                  <img
                     className="w-full h-70 object-cover rounded"
                     src={image}
                     alt={title}
                  />
               </div>

               <div className="col-span-11 md:col-span-7 lg:col-span-7 flex flex-col justify-center space-y-2">
                  <h2 className="text-3xl font-bold">{title}</h2>
                  <p className="text-gray-500">
                     Developed By{' '}
                     <span className="font-semibold text-violet-600">
                        {companyName}
                     </span>{' '}
                  </p>

                  <div className="divider my-1"></div>

                  <div className="flex flex-wrap justify-start items-center gap-10 lg:gap-20 py-4">
                     <div className="space-y-0.5">
                        <img
                           src={download}
                           alt="download Icon"
                           className="size-6"
                        />
                        <p className="text-sm text-gray-500">Downloads</p>
                        <h5 className="text-black font-extrabold text-2xl">
                           {downloads}
                        </h5>
                     </div>
                     <div className="space-y-1">
                        <img
                           src={rating}
                           alt="rating icon"
                           className="size-6"
                        />
                        <p className="text-sm text-gray-500">Average Rating</p>
                        <h5 className="text-black font-extrabold text-2xl">
                           {ratingAvg}
                        </h5>
                     </div>
                     <div className="space-y-0.5">
                        <img
                           src={review}
                           alt="review icon"
                           className="size-6"
                        />
                        <p className="text-sm text-gray-500">Total Reviews</p>
                        <h5 className="text-black font-extrabold text-2xl">
                           {reviews}
                        </h5>
                     </div>
                  </div>

                  <button
                     disabled={install}
                     onClick={() => handleInstall(appId)}
                     className={`btn ${install ? 'bg-gray-300 text-slate-600 cursor-not-allowed' : 'bg-[#00d390] hover:bg-[#00b97e] text-white cursor-pointer'}  border-none w-fit px-8 mt-4`}
                  >
                     {install ? 'Installed' : `Install Now (${size})`}
                  </button>
               </div>
            </div>
            <div className="divider my-8"></div>
            {/* Charts */}
            <RatingChart ratings={ratings} />
            <div className="divider my-6"></div>
            {/* Descriptions */}
            <h6 className="mb-3 font-semibold text-lg">Description</h6>
            <p className="text-gray-500 leading-relaxed space-y-5">
               {description}
            </p>
         </div>
      </Section>
   );
};

export default AppDetails;
