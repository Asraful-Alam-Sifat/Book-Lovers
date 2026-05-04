import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer />
            <ToastContainer position="bottom-center" autoClose={1000} />
        </div>
    );
};

export default MainLayout;