import Navbar from "@/components/NavBar/Navbar";


const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default MainLayout;