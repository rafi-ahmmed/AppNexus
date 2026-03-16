import { useLoaderData, useParams } from 'react-router';
import Section from '../../Components/Shared/Section';
import { Download } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png';

const AppDetails = () => {
   const apps = useLoaderData();
   const { id } = useParams();

   const appDetails = apps.find((app) => app.id == parseInt(id));
   console.log(appDetails);
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
   return (
      <Section>
         <div className="py-20">
            {/* grid-cols-11 ঠিক আছে, তবে h-full নিশ্চিত করতে হবে */}
            <div className="grid items-stretch grid-cols-11 gap-5 lg:gap-10">
               {/* বাম পাশের ইমেজ সেকশন */}
               <div className="col-span-11 md:col-span-4 lg:col-span-4">
                  <img
                     className="w-full h-full object-cover rounded-2xl"
                     src={image}
                     alt={title}
                  />
               </div>

               {/* ডান পাশের কন্টেন্ট সেকশন */}
               <div className="col-span-11 md:col-span-7 lg:col-span-7 flex flex-col justify-center space-y-2">
                  <h2 className="text-3xl font-bold">{title}</h2>
                  <p className="text-gray-500">
                     Developed By{' '}
                     <span className="font-semibold text-violet-600">
                        {companyName}
                     </span>{' '}
                  </p>

                  <div className="divider my-1"></div>

                  <div className="flex flex-wrap justify-start items-center gap-6 lg:gap-10 py-4">
                     <div className="space-y-0.5">
                        <img
                           src={download}
                           alt="download Icon"
                           className="size-6"
                        />
                        <p className="text-sm text-gray-500">Downloads</p>
                        <h5 className="text-black font-extrabold text-xl">
                           {downloads}
                        </h5>
                     </div>
                     <div className="space-y-1">
                        <img
                           src={rating}
                           alt="rating icon"
                           className="size-6"
                        />
                        <p className="text-sm text-gray-500">Avg Rating</p>
                        <h5 className="text-black font-extrabold text-xl">
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
                        <h5 className="text-black font-extrabold text-xl">
                           {reviews}
                        </h5>
                     </div>
                  </div>

                  <button className="btn bg-[#00d390] hover:bg-[#00b97e] border-none text-white w-fit px-8 mt-4">
                     Install Now ({size})
                  </button>
               </div>
            </div>
         </div>
      </Section>
   );
};

export default AppDetails;
