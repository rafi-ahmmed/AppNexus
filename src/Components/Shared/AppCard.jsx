import { Download } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import { GrDownload } from 'react-icons/gr';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
   const {
      id,
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
      <Link to={`/details/${id}`}>
         <div className="card bg-base-100 shadow-sm rounded h-full flex flex-col border border-gray-100">
            <figure className="p-3 pb-0">
               <img
                  src={image}
                  alt={title}
                  className="rounded-md w-full  h-72 aspect-3/4 object-cover bg-gray-50"
               />
            </figure>

            <div className="px-4 py-4 grow flex flex-col justify-between gap-3">
               <h2 className="card-title ">{title}</h2>

               <div className="flex justify-between items-center mt-auto">
                  <div className="badge badge-soft text-[#00D390] bg-[#f1f5e8] rounded border-none font-medium py-4">
                     <Download className="size-5" />

                     {downloads}
                  </div>

                  <div className="badge badge-soft text-[#ff8811] bg-[#fff0e1] rounded border-none font-medium py-4">
                     <FaStar className="size-4" />

                     {ratingAvg}
                  </div>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default AppCard;
