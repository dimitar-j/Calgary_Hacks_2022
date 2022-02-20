import React from 'react'

import DashNav from '../components/DashNav'
import Filter from '../components/Filter'
import Listings from '../components/Listings'

import Grid from '@mui/material/Grid'
import Footer from '../components/Footer'
import { arrayRemove } from 'firebase/firestore'

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            minPrice: 0,
            maxPrice: Number.MAX_VALUE,
            rating: 0,
            filters: []
        }
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, property, filter){
        console.log(`Changing ${property} to ${event.target.value}`)
        if (property === "filters"){
            if (event.target.checked) {
                this.setState({filters: this.state.filters.concat([filter])})
            } else {
                this.setState({filters: this.state.filters.filter(function(value) { 
                    return value !== filter 
                })});
            }
        } else if (property === "rating") {
            this.setState({ [property]: event.target.value })
        } else {
            this.setState({ [property]: parseFloat(event.target.value) })
        }
    }

    render () {
        const {filters, minPrice, maxPrice, rating} = this.state;
        return(
            <div>
                <DashNav></DashNav>
                <Grid container style={{height: "100%"}} spacing={5}>
                    <Grid item xs={3}>
                        <Filter handleFilterChange={this.handleChange}></Filter>
                    </Grid>
                    <Grid item xs={9}>
                        <Listings listings={this.props.listings} minPrice={minPrice} maxPrice = {maxPrice} rating = {rating} filters={filters}></Listings>
                    </Grid>
                </Grid>
                <Footer></Footer>
            </div> 
        )
    }
}

export default Dashboard
