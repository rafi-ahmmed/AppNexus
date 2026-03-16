import {
   BarChart,
   Bar,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Legend,
} from 'recharts';

const RatingChart = ({ ratings }) => {
   
   const finalRating = [...ratings].reverse();
   return (
      <div>
         <h3 className="mb-6 font-semibold text-black text-xl">Ratings</h3>
         <BarChart
            width="100%"
            height={300}
            data={finalRating}
            layout="vertical"
            barCategoryGap="20%"
         >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Bar dataKey="count" fill="#f97316" />
         </BarChart>
      </div>
   );
};

export default RatingChart;
