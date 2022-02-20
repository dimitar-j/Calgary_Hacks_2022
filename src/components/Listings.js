import React, { Component } from 'react'
import Listing from './Listing'
import Grid from '@mui/material/Grid';

var stylingObjects = {
    container: {
        width: "90%",
        height: "100%",
        borderLeft: "1px solid",
        padding: "50px"
    }
}

export default class Listings extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div style={stylingObjects.container}>
                <h1>
                    Recommended for you
                </h1>
                <Grid container spacing={5}>
                    {this.props.listings.map((listing) => 
                    (<Grid item xs={11} md = {6}>
                        <Listing data={listing}></Listing>
                    </Grid>))}
                </Grid>
            </div>
        )
    }
}
