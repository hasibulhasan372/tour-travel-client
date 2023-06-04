import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png"

const Logo = () => {
    return <Link to="/" className="hidden md:block"><img src={logoImg} alt="logo" height={100} width={100} /></Link> ;
};

export default Logo;