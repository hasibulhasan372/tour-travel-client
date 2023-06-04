
const CategoryBox = ({category}) => {
    const {label, icon : Icon} = category;
    return (
        <div className="flex flex-col text-gray-500 hover:text-black justify-center border-b-2 border-transparent hover:border-gray-300 items-center gap-2 transition duration-500">
            <Icon size={26}></Icon>
            <h3 className="pb-1">{label}</h3>
        </div>
    );
};

export default CategoryBox;