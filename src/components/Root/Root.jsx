import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

            {/* for toast */}
            <ToastContainer />
        </div>
    );
};

export default Root;