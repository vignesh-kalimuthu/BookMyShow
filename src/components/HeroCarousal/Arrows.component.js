import React from "react"


export const NextArrow = (props) => {
    // { classNAme , style , onClick} = props ;

    return ( 
    <>
        <div className = { props.className }
             style = {{...props.style}}
             onClick={ props.onClick}/>  
    </>
    );

};  

export const PrevArrow = (props) => {
    return ( 
    <>
        <div className = {props.className}
             style = {{...props.style }}
             onClick = { props.onClick }/>  
    </>
    );

};
