import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";

const StudentLayout = () => {
   return (
      <>
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
};

export default StudentLayout;
