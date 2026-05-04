import Navbar from "@/components/NavBar/Navbar";
import { Divide } from "lucide-react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AuthLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <ToastContainer position="bottom-center" autoClose={1000} />
        </div>
    )
};

export default AuthLayout;