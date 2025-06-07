import React from 'react'
import { useLocation } from "react-router-dom"

export const Product = () => {
    const location = useLocation();
    const getimage = location.state;
    console.log(getimage);
    return (
        <>     
            <img src={`http://localhost:1010/${getimage}`} style={{height:"100px", width:"100px"}}/>
        </>
    )
}