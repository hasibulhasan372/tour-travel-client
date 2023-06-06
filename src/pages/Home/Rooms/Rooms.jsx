import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Container from "../../shared/Container/Container";
import RoomCard from "./RoomCard";
import { useSearchParams } from "react-router-dom";
import { allRooms } from "../../../API/room";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const {loading, setLoading} = useAuth();
    const [params] = useSearchParams();
    const category = params.get('category');

    useEffect(() =>{
        setLoading(true)
        allRooms()
        .then(data => {
            if(category){
                const filterData = data.filter(room => room.category === category);
                setRooms(filterData)
            }
            else{
                setRooms(data);
            }
            setLoading(false)
        })
    },[setLoading, category])

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