import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentDate,
  setIsOpen,
  setSelectedSeat,
} from "../Redux/InitialSlice";
import AddBooking from "./AddBooking";

const SeatMap = () => {
  const SeatCounts = 100;
  const { curentDate, bookings } = useSelector((state) => state.initialSlice);

  const dispatch = useDispatch();

  const onDateChange = (newDate) => {
    dispatch(setCurrentDate(newDate));
  };

  const handleBooking = (id) => {
    dispatch(setSelectedSeat(id));
    dispatch(setIsOpen(true));
  };

  return (
    <div className="flex flex-col justify-start items-start gap-10">
      <DatePicker
        defaultValue={dayjs()}
        disabledDate={(current) => {
          return (
            dayjs().add(-1, "days") >= current ||
            dayjs().add(1, "month") <= current
          );
        }}
        onChange={onDateChange}
      />

      <div className="max-w-[300px] md:max-w-[500px] lg:max-w-[700px] flex flex-wrap gap-5 justify-start items-center">
        {[...Array(SeatCounts)].map((_, idx) => {
          const isBooked = bookings?.some(
            (booking) =>
              dayjs(booking.BookingDate).isSame(curentDate, "day") &&
              booking.seatNo === idx
          );

          return (
            <button
              key={idx}
              className={`${
                isBooked ? "bg-red-500 cursor-not-allowed" : "bg-green-500"
              } max-w-[50px] px-10 py-3 flex justify-center items-center`}
              onClick={() => !isBooked && handleBooking(idx)}
            >
              <p>{idx + 1}</p>
            </button>
          );
        })}
      </div>
      <AddBooking />
    </div>
  );
};

export default SeatMap;
