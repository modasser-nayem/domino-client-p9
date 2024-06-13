import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";

const AdminLayout = () => {
   return (
      <>
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
};

export default AdminLayout;
