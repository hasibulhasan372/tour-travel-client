import Logo from "../../../components/Logo/Logo";
import Container from "../Container/Container";
import MenuDropdown from "../../../components/MenuDropdown/MenuDropdown";


const NavBar = () => {

   
    return (
        <div className="w-full  fixed shadow-sm z-50 ">
            <div className="lg:py-4 py-2 border-b-[1px]">
                <Container>
                    <div className="flex justify-between items-center">
                        <Logo></Logo>
                        <div>Search</div>
                        <MenuDropdown></MenuDropdown>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NavBar;