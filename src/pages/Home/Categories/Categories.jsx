import { Toaster, toast } from "react-hot-toast";
import Container from "../../shared/Container/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoryList";

const Categories = () => {
    const handleToast = ()=>{
        toast("hello")
    }
    return (
        <div className="md:py-5">
            <Container>
                <button className="btn" onClick={handleToast}>Hello</button>
            <div className="flex flex-row  overflow-x-auto justify-between">
                {
                    categories.map((category, index) => <CategoryBox
                    key={index}
                    category={category}
                    ></CategoryBox>)
                }
            </div>
            <Toaster></Toaster>
            </Container>
        </div>
    );
};

export default Categories;
