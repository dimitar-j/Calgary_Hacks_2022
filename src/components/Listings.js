import React, { Component } from 'react'
import Listing from './Listing'
import Grid from '@mui/material/Grid';

var stylingObjects = {
    container: {
        paddingTop: "50px",
        width: "100%",
        height: "100%",
        borderLeft: "1px solid",
        paddingLeft: "50px"
    }
}

export default class Listings extends Component {
    render() {
        return (
            <div style={stylingObjects.container}>
                <h1>
                    Recommended for you
                </h1>
                <Grid container spacing={2}>
                    <Grid item xs={12} md = {5}>
                        <Listing></Listing>
                    </Grid>
                    <Grid item xs={12} md = {5}>
                        <Listing></Listing>
                    </Grid>
                    <Grid item xs={12} md = {5}>
                        <Listing></Listing>
                    </Grid>
                    <Grid item xs={12} md = {5}>
                        <Listing></Listing>
                    </Grid>
                    <Grid item xs={12} md = {5}>
                        <Listing></Listing>
                    </Grid>
                    <Grid item xs={12} md = {5}>
                        <Listing></Listing>
                    </Grid>
                    <Grid item xs={12} md = {5}>
                        <Listing></Listing>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
