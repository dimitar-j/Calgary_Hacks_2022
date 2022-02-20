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
        console.log(this.props);
    }

    isValid(listing){
        console.log(listing);
        if (!isNaN(this.props.minPrice) && this.props.minPrice !== null){
            if (listing.price < this.props.minPrice ){
                return false;
            }
        }
        if (!isNaN(this.props.maxPrice) && this.props.minPrice !== null){
            if (listing.price > this.props.maxPrice){
                return false;
            }
        }
        if (!isNaN(this.props.rating) && this.props.minPrice !== null) {
            if (listing.rating < this.props.rating) {
                return false;
            }
        }
        for (let i = 0; i < this.props.filters.length; i++){
            if (!listing.tags.includes(this.props.filters[i])) {
                return false;
            }
        }
        return true;
    }

    render() {
        return (
            <div style={stylingObjects.container}>
                <h1>
                    Recommended for you
                </h1>
                <Grid container spacing={5}>
                    {this.props.listings.map((listing, index) => 
                    /* (<Grid item xs={11} md = {6} key={index}>
                        {(this.isValid(listing) ? <Listing data={listing}></Listing> : null)}
                    </Grid>)) */
                        (this.isValid(listing) ? 
                            <Grid item xs={11} md={6} key={index}>
                                <Listing data={listing}></Listing>
                            </Grid>
                        : null )
                    )}
                </Grid>
            </div>
        )
    }
}
