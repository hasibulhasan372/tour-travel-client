import Heading from "../RoomDetails/Heading"

const RoomHeader = ({roomData}) => {
    return (
        <>
        
        <Heading title={roomData.title} subtitle={roomData.location} />
        <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
          <img
            className='object-cover w-1/2 rounded-xl'
            src={roomData.image}
            alt='header image'
          />
        </div>
      </>
    );
};

export default RoomHeader;