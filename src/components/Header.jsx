import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <h1>LOGO</h1>
                <nav>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/About"}>About</Link></li>
                        <li><Link to={"/Contacts"}>Contacts</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
 
export default Header;