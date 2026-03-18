import logo from '../../assets/logo.png';

const DataLoading = () => {
   return (
      <div className="flex justify-center items-center min-h-[30vh]">
         {/* <h2>Loading....</h2> */}
         <img
            className="animate-spin w-[30px]"
            referrerPolicy="no-referrer"
            src={logo}
            alt="logo"
         />
      </div>
   );
};

export default DataLoading;
