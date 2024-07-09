import { Link } from "react-router-dom";

const Contacts = () => {
    return (
        <>
            <h1>Contacts</h1>
            <ul>
                <li><Link to={"/Contact/1/E-mail"}>E-mail</Link></li>
                <li><Link to={"/Contact/2/WhatsApp"}>WhatsApp</Link></li>
                <li><Link to={"/Contact/3/LinkedIn"}>LinkedIn</Link></li>
            </ul>
        </>
    );
}
 
export default Contacts;