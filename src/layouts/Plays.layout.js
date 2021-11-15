import React from "react";

import Navbar from "../components/Navbar/navbar.component";

const NavbarLayout = (props) => {
    return ( <>

        <Navbar/> 
        
        { props.children }
        
         </>
    );
};
export default NavbarLayout;  