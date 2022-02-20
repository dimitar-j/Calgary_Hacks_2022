import React from 'react'

import DashNav from '../components/DashNav'
import Filter from '../components/Filter'
import Listings from '../components/Listings'

import Grid from '@mui/material/Grid'
import Footer from '../components/Footer'

function Dashboard() {
    return (
        <div>
            <DashNav></DashNav>
            <Grid container style={{height: "100%"}} spacing={10}>
                <Grid item xs={2}>
                    <Filter></Filter>
                </Grid>
                <Grid item xs={10}>
                    <Listings></Listings>
                </Grid>
            </Grid>
            <Footer></Footer>
        </div>
    )
}

export default Dashboard
