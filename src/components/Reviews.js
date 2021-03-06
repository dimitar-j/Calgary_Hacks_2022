import React from 'react';
import Review from '../components/ReviewCard.js'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function Reviews(){
    var stylingObject = {
        container: {
            position: "relative",
            background: "#F6836B",
            height: "500px",
            paddingTop: "250px",
            display: "flex",
            gap: "100px",
            justifyContent: "center"
        },
        imageContainer: {
            display: "flex",
            justifyContent: "center"
        },
        textContainer: {
            display: "flex",
            justifyContent: "center"
        }
    }

    const CardStyle = {
        border: "1px solid #03506f",
        borderRadius: "30px",
        padding: "20px",
        width: "270px",
        height: "370px",
        backgroundColor: "#F3F3F3"
    };

    return(
        <div style={{position:"relative"}}>
            <div style={stylingObject.container}>
                <Card style={CardStyle} sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography variant="h5" color="div">
                            “It used to be so difficult to find affordable healthy options while going to school”
                        </Typography>
                    </CardContent>
                    <div style={stylingObject.imageContainer}>
                        <img src={require('../assets/annie.png')} width= "100px" height="100px"/>
                    </div>
                    <div style={stylingObject.textContainer}>
                        <h1>Annie F.</h1>
                    </div>
                </Card>
                <Card style={CardStyle} sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography variant="h5" color="div">
                            “MyChef has tremendously helped me incorporate healthy eating into my lifestyle”
                        </Typography>
                    </CardContent>
                    <div style={stylingObject.imageContainer}>
                        <img src={require('../assets/james.png')} width= "100px" height="100px"/>
                    </div>
                    <div style={stylingObject.textContainer}>
                        <h1>James B.</h1>
                    </div>
                </Card>
                <Card style={CardStyle} sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography variant="h5" color="div">
                            “After switching to MyChef, fast food take out just doesn’t taste the same anymore”
                        </Typography>
                    </CardContent>
                    <div style={stylingObject.imageContainer}>
                        <img src={require('../assets/david.png')} width= "100px" height="100px"/>
                    </div>
                    <div style={stylingObject.textContainer}>
                        <h1>David G.</h1>
                    </div>
                </Card>
            </div>
            <div class="custom-shape-divider-top-1645322238">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
        
    )
}

export default Reviews;