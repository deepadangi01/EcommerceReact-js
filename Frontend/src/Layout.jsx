import TopNavbar from "./componets/TopNavbar";
import MenuNav from "./componets/MenuNav"
import { Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <TopNavbar />
        <MenuNav/>
      
        <Outlet/>


        </>
    )
}
export default Layout;