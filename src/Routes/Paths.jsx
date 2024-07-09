import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../Pages/NotFound";
import Contact from "../Pages/Contact";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />}/>
                        <Route path="/About" element={<About />}/>
                        <Route path="/Contacts" element={<Contacts />}/>
                        <Route path="/Contact/:id/:nome" element={<Contact />}/>
                    </Route>
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;
