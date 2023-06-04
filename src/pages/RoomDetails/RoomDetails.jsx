
import BookingDate from "./BookingDate";
import Heading from "./Heading";


const RoomDetails = () => {
    return (
       <div className="max-w-[1170px] mx-auto">
         <div className="text-center space-y-8">
            <Heading title="The 'Salgame Retreat'" subtitle="Dhaka"></Heading>
            <h2>Details</h2>
            <BookingDate></BookingDate>
        </div>
       </div>
    );
};

export default RoomDetails;