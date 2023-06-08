import {  DateRange } from "react-date-range";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import BookingModal from "../../components/Modal/BookingModal";
import { roomBooking, updateBooking } from "../../API/bookings.js";
// import { updateBooking } from "../../API/bookings.js";
import { toast } from 'react-hot-toast';
import { formatDistance } from 'date-fns'
import { useNavigate } from "react-router-dom";

const BookingDate = ({roomData}) => {
    const {user} = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    // Calculate the booking total days 
    const totalDays = parseFloat(formatDistance( new Date (roomData?.to), new Date (roomData?.from)).split(' ')[0])
    // Booking Start and end Value 
    const [value, setValue] = useState({startDate: new Date (roomData?.from), endDate: new Date (roomData?.to)}) 
    // Create the Booking Details  


    const [bookingInfo] = useState({
        guest:{name: user?.displayName, email: user?.email, photo: user?.photoURL } ,
        host: roomData.host.email,
        price: roomData?.price * totalDays,
        location: roomData?.location,
        from: value?.startDate,
        to: value?.endDate,
        title: roomData?.title,
        roomId: roomData?._id,
        image : roomData?.image,
    });
    const handleSelection = (ranges)=>{
        setValue({...ranges})
    }

    const closeModal = () =>{
        setIsOpen(false)
    };
    
    const handlePayment = () =>{
       roomBooking(bookingInfo)
       .then(data => {
        if(data.insertedId){
            updateBooking(roomData?._id, true);
            closeModal();
            navigate("/dashboard/myBookings")
            toast.success("Saved your bookings information")
        }
       })
       .catch(error =>{
        console.log(error)
       })

    }


    return (
        <div>
            <h2 className="pb-4 font-bold text-xl border-b">Per Night: ${roomData?.price}</h2>
           <DateRange ranges={[value]} onChange={handleSelection} rangeColors={['#F43F5E']} minDate={value?.startDate} maxDate={value?.endDate}></DateRange>
           <div className="pb-2">
            <button onClick={()=>setIsOpen(true)} className="btn btn-info"
             disabled={roomData?.host?.email === user?.email || roomData?.booked} >Reservation</button>
           </div>
           <div className="flex justify-between text-xl font-bold border-t pt-4">
            <h2>Total: </h2>
            <h3>${roomData?.price * totalDays}</h3>
           </div>
           <BookingModal isOpen={isOpen} closeModal={closeModal} bookingInfo={bookingInfo} handlePayment={handlePayment}></BookingModal>
        </div>
    );
};

export default BookingDate;