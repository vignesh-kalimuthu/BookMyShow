// Transforms component into another component

// Adding additional functionalities to the existing component

import React from "react";
import { Route } from "react-router-dom";
// Layouts 
import DefaultLayout from "../layouts/Defaul.layout";

const DefaultHOC = ({ component: Component, ...rest_props }) => {
    // component 
    // props -> path exact 
    return (
  <>
	<Route {...rest_props } component={ (props)=> (
		
    <DefaultLayout>
		
    	<Component {...props } />
		
    </DefaultLayout> ) } />
  </> 
    );   
};
 export default DefaultHOC;