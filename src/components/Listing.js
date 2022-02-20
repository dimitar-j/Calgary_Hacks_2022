import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

var stylingObject = {
    container: {
        width: "100%",
        height: "250px",
        background: "#ffffff",
        margin: "20px" 
    }
}

export default class Listing extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={this.props.data.thumbnail}
                    alt="photo of food"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {this.props.data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {this.props.data.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
        )
    }
}
