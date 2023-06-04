import useAuth from "../../../hooks/useAuth";



const Avater = () => {
    const {user} = useAuth();
    return (
        <div className="hidden md:block">
            {
                user && user.photoURL ? <img src={user.photoURL} alt="" height='30' width='30' className="rounded-full" /> : <img src="https://i.ibb.co/j58R6r9/user.png" alt="" height='30' width='30' className="rounded-full" />
            }
        </div>
    );
};

export default Avater;