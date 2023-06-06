
import { useLoaderData } from "react-router-dom";
import BookingDate from "./BookingDate";
import RoomHeader from "./RoomHeader";


const RoomDetails = () => {
    const roomData = useLoaderData();
    return (
       <div className="max-w-[1070px] mx-auto">
         <div className="text-center flex flex-col space-y-8">
            <RoomHeader roomData={roomData}></RoomHeader>
            <BookingDate roomData={roomData}></BookingDate>
    
        </div>
       </div>
    );
};

export default RoomDetails;