import React from 'react'
import Button from '@mui/material/Button';

var stylingObject = {
    container: {
        width: "100%",
        height: "70px",
        background: "#FFFFF3",
        display: "flex",
        paddingTop:"10px",
        justifyContent: "space-around",
        alignItems: "center"
    },
    linksContainter: {
        display: "flex",
        gap: "100px"
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
                <Button>
                    <img src={require('../assets/logo.png')} width= "100%" height="100%"/>
                </Button>
            </div>
            <div style={stylingObject.linksContainter}>
                <Button href="/" variant="text" style={{color:"black"}} >Home</Button>
                <Button href = "/dashboard"variant="text" style={{color:"black"}}>Explore</Button>
                <Button variant="text" style={{color:"black"}}>Log In</Button>
            </div>
        </div>
    )
}

export default HomeNav
