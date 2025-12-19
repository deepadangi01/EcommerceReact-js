import TopNavbar from "./componets/TopNavbar";
import MenuNav from "./componets/MenuNav"
import { Outlet } from "react-router-dom";
import Footer from "./componets/Footer";
const Layout=()=>{
    return(
        <>
        <TopNavbar />
        <MenuNav/>
        
        <Outlet/>
      <Footer/>

        </>
    )
}
export default Layout;