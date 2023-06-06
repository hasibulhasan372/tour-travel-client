import { DateRange } from "react-date-range";



const BookingDate = () => {
    return (
        <div>
           <DateRange></DateRange>
           <div className="mt-6">
            <button className="btn btn-info" >Reservation</button>
           </div>
        </div>
    );
};

export default BookingDate;