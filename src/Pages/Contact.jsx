import { useParams } from "react-router-dom";

const Contact = () => {

    const {nome} =useParams();

    return (
        <>
            <h1>Contact {nome}</h1>
        </>
    );
}
 
export default Contact