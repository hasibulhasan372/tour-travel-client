
import { useState } from "react";
import { savedImage } from "../../../API/savedImage";
import AddRoomForm from "../../../components/Forms/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { addRoom } from "../../../API/room";
import { Toaster, toast } from "react-hot-toast";



const AddRoom = () => {
    const { user } = useAuth();
    const [dates, setDates] = useState([new Date(), new Date()]);
    const [uploadButtonText, setUploadButtonText] = useState("Upload Image")


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const from = dates[0];
        const to = dates[1];
        const title = form.title.value;
        const price = form.price.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const total_guest = form.total_guest.value;
        const image = form.image.files[0]
        savedImage(image)
            .then(data => {
                const formInfo = {
                    image: data.data.display_url,
                    location,
                    category,
                    title,
                    price: parseFloat(price),
                    host: {
                        email: user?.email,
                        name: user?.displayName,
                        img: user?.photoURL
                    },
                    bedrooms: parseFloat(bedrooms),
                    bathrooms: parseFloat(bathrooms),
                    description,
                    total_guest: parseFloat(total_guest),
                    from,
                    to
                }
                console.log(formInfo)
                addRoom(formInfo)
                    .then(data => {
                        console.log(data)

                        if (data.insertedId) {
                            toast.success("Room Added")
                        }
                    })
            })
    };
    const handleImageChange = (image) => {
        setUploadButtonText(image.name);

    };
    const handleDates = value => {
        setDates(value)
    };
    return (
        <div className="w-full">
            <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates} dates={dates} handleImageChange={handleImageChange} uploadButtonText={uploadButtonText} ></AddRoomForm>
            <Toaster
            />
        </div>
    );
};

export default AddRoom;