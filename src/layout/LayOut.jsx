import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar/NavBar";


const LayOut = () => {
    return (
        <div className="max-w-5xl mx-auto">
             <div className="fixed z-10 ml-16 opacity-50 text-center">  <NavBar /></div>
              <Outlet></Outlet>
        </div>
    );
};

export default LayOut;