
import Container from "../../shared/Container/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoryList";

const Categories = () => {

    return (
        <div className="md:py-5">
            <Container>
            <div className="flex flex-row  overflow-x-auto justify-between">
                {
                    categories.map((category, index) => <CategoryBox
                    key={index}
                    category={category}
                    ></CategoryBox>)
                }
            </div>
            </Container>
        </div>
    );
};

export default Categories;
