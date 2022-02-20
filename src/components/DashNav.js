import React from 'react'
import Button from '@mui/material/Button';

var stylingObject = {
    container: {
        height: "70px",
        background: "#FFFFF3",
        display: "flex",
        padding:"10px",
        justifyContent: "left",
        alignItems: "center",
        paddingLeft: "20px",
        boxShadow: "0px 1px 10px 2px #ccc",
    },
    logoContainer: {
        width: "70px",
        height: "70px",
    }
}

function HomeNav() {
    return (
        <div style = {stylingObject.container}>
            <div style={stylingObject.logoContainer}>
                <img src={require('../assets/logo.png')} width= "100%" height="100%"/>
            </div>
        </div>
    )
}

export default HomeNav
