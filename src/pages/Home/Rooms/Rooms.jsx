import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Container from "../../shared/Container/Container";
import RoomCard from "./RoomCard";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const {loading, setLoading} = useAuth();

    useEffect(() =>{
        setLoading(true)
        fetch('rooms.json')
        .then(res =>res.json())
        .then(data => {
            setRooms(data);
            setLoading(false)
        })
    },[setLoading])

    if(loading){
        return <h4>Loading....</h4>
    }
    return (
       <Container>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {
            rooms.map((room, index )=> <RoomCard key={index} room={room}></RoomCard>)
            }
        </div>
       </Container>
    );
};

export default Rooms;