import SeatMap from "./SeatMap";
import Signout from "./Signout";


const SeminarHall = () => {
  return (
    <div className="justify-center items-center flex flex-col gap-10">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-[20px]">All eyes this way</h1>
        <div className="bg-slate-500 p-1 min-w-[200px] md:min-w-[300px] lg:min-w-[350px]"/>
      </div>

     
     
      <div className="flex flex-col gap-10">
        <SeatMap />
        <Signout/>
      </div>
    </div>
  );
};

export default SeminarHall;
