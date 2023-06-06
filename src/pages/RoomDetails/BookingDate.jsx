import {  DateRange } from "react-date-range";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import BookingModal from "../../components/Modal/BookingModal";

import { formatDistance } from 'date-fns'

const BookingDate = ({roomData}) => {
    const {user, role} = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const totalDays = parseFloat(formatDistance( new Date (roomData?.to), new Date (roomData?.from)).split(' ')[0])
    const [value, setValue] = useState({startDate: new Date (roomData?.from),
        endDate: new Date (roomData?.to)}) 
    const [bookingInfo] = useState({
        guest:{name: user?.displayName, email: user?.email, photo: user?.photoURL } ,
        host: roomData.host.email,
        price: roomData?.price * totalDays,
        location: roomData?.location,
        from: value.startDate,
        to: value.endDate
        
        
    });
    const handleSelection = (ranges)=>{
        setValue({...ranges})
    }

    const closeModal = () =>{
        setIsOpen(false)
    };


    return (
        <div>
            <h2 className="pb-4 font-bold text-xl border-b">Per Night: ${roomData?.price}</h2>
           <DateRange ranges={[value]} onChange={handleSelection} rangeColors={['#F43F5E']}></DateRange>
           <div className="pb-2">
            <button onClick={()=>setIsOpen(true)} className="btn btn-info" disabled={roomData?.host?.email === user?.email} >Reservation</button>
           </div>
           <div className="flex justify-between text-xl font-bold border-t pt-4">
            <h2>Total: </h2>
            <h3>${roomData?.price * totalDays}</h3>
           </div>
        <BookingModal isOpen={isOpen} closeModal={closeModal} bookingInfo={bookingInfo}></BookingModal>
        </div>
    );
};

export default BookingDate;