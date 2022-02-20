import React from 'react'

var stylingObject = {
    container: {
        display: "flex",
        width: "100%",
        height: "500px",
        background: "#FFFFF3",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: "45px",
        paddingBottom: "90px"
    },
    textContainer: {
        
    },
    imageContainer: {
        
    },
    image: {
        width: "400px",
        height: "400px"
    }
}

function Hero() {
    return (
        <div style = {stylingObject.container}>
            <div style = {stylingObject.textContainer}>
                <h1>Shop fresh home made food.</h1>
                <p>Save Time. Save Money. Eat Well.</p>
            </div>
            <div style = {stylingObject.imageContainer}>
                <img src={require('../assets/ChefImage.png')} />
            </div>
        </div>
    )
}

export default Hero