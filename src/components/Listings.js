import React, { Component } from 'react'

var stylingObjects = {
    container: {
        paddingTop: "50px",
        width: "100%",
        height: "100%",
    }
}

export default class Listings extends Component {
    render() {
        return (
            <div style={stylingObjects.container}>
                <h1>
                    Recommended for you
                </h1>
            </div>
        )
    }
}
