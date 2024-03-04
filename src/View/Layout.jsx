import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Breadcrumb from "../Components/Breadcrumb";
import { CartContextProvider } from "../Store/Shopping-Cart-Context.jsx";

function Layout() {
    return (
        <>
            <CartContextProvider>
                <Navbar />
                <div className="lg:container mx-auto mt-20 px-4">
                    <Breadcrumb />
                    <Outlet />
                </div>
            </CartContextProvider>
        </>
    )
}

export default Layout;