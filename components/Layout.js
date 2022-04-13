import Navbar from "./navBar";
import  Head from "next/head"

const Layout = ({children})=>{
   return(
    
<div className='container-fluid' >

<Navbar/>
       { children }
     </div>


   )
}
export default Layout;