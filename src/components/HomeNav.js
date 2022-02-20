import React from 'react'

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
                <img src={require('../assets/logo.png')} width= "100%" height="100%"/>
            </div>
            <div style={stylingObject.linksContainter}>
                <a>Home</a>
                <a>Explore</a>
                <a>Log In</a>
            </div>
        </div>
    )
}

export default HomeNav
