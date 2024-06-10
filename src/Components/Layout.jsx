import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-[64px]"></div>
            <div className="min-h-[calc(100vh-116px)] w-full z-10">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;