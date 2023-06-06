
import { useLoaderData } from "react-router-dom";
import BookingDate from "./BookingDate";
import RoomHeader from "./RoomHeader";


const RoomDetails = () => {
    const roomData = useLoaderData()
    console.log(roomData)
    return (
       <div className="max-w-[1170px] mx-auto">
         <div className="text-center space-y-8">
            <RoomHeader roomData={roomData}></RoomHeader>
            <h2>Details</h2>
            <BookingDate></BookingDate>
    
        </div>
       </div>
    );
};

export default RoomDetails;