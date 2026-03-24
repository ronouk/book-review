import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

            {/* for toast */}
            <ToastContainer />
        </div>
    );
};

export default Root;