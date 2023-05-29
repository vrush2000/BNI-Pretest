import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayouts = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <Header />
                <div className="content">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
}
export default MainLayouts