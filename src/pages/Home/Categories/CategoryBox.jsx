import { useNavigate, useSearchParams } from 'react-router-dom'
import queryString from 'query-string';
const CategoryBox = ({ category }) => {
    const { label, icon: Icon } = category;
    const [params] = useSearchParams();
    const navigate = useNavigate(); 
    const handleCategoryFilter = () => {
        let currentQuery = {};
        if (params) {
            currentQuery = queryString.parse(params.toString())
        }
        const updatedQuery = {
            ...currentQuery,
            category: label
        }
        const url = queryString.stringifyUrl(
            {
                url: '/',
                query: updatedQuery
            },
            {skipNull: true}
        )
        navigate(url)
    }
    return (
        <div onClick={handleCategoryFilter} className="flex cursor-pointer flex-col text-lg text-gray-500 hover:text-black justify-center border-b-2 border-transparent hover:border-gray-300 items-center gap-2 transition duration-500">
            <Icon size={26}></Icon>
            <h3 className="pb-1">{label}</h3>
        </div>
    );
};

export default CategoryBox;