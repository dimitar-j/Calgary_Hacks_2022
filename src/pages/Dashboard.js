import React from 'react'

import DashNav from '../components/DashNav'
import Filter from '../components/Filter'
import Listings from '../components/Listings'

import Grid from '@mui/material/Grid'
import Footer from '../components/Footer'

function Dashboard(props) {

    return (
        <div>
            <DashNav></DashNav>
            <Grid container style={{height: "100%"}} spacing={5}>
                <Grid item xs={3}>
                    <Filter></Filter>
                </Grid>
                <Grid item xs={9}>
                    <Listings listings={props.listings} fake={props.fake}></Listings>
                </Grid>
            </Grid>
            <Footer></Footer>
        </div>
    )
}

export default Dashboard
