import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

var stylingObject = {
    container: {
        width: "100%",
        background: "#ffffff",
        margin: "20px",
        height: "100px"
    },
    tagContainer: {
        display: "inline-flex",
        gap: "8px",
        textAlign:"center",
        color:"white",
    },
    tag: {
        background: "#0A891F80",
        borderRadius: "10px",
        padding: "5px 15px",
    }
}

export default class Listing extends Component {
    constructor(props){
        super(props);
        this.state = {
            dialogOpened: false,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.setState({dialogOpened: !this.state.dialogOpened})
    }

    renderDialog(){
        const {dialogOpened} = this.state;
        console.log(this.props)
        return(
            <Dialog
                width={"md"}
                open={dialogOpened}
                onClose={this.handleChange}
                scroll={"paper"}
            >
                <DialogTitle>{this.props.data.name}</DialogTitle>
                <DialogContent>
                    <img src={this.props.data.thumbnail} width="100%"></img>
                    <br></br>
                    <br></br>
                    <Typography variant="h6">
                        {this.props.data.description}
                    </Typography>
                    <br></br>
                    <Divider></Divider>
                    <br></br>
                    <Typography variant="h5">Menu</Typography>
                    <br></br>
                    {this.props.data.menu.map((item) => (
                        <Typography>
                            {item}
                        </Typography>
                    ))}
                    <br></br>
                    <Divider></Divider>
                    <br></br>
                    <Typography variant="h5">Details</Typography>
                    <br></br>
                    <Typography>
                        Cuisine: {this.props.data.cuisine}
                    </Typography>
                    <Typography>
                        Customers: {this.props.data.customers}
                    </Typography>
                    <Typography>
                        Pickup Location: {this.props.data.pickup_location}
                    </Typography>
                    <Typography>
                        Pickup Time: {this.props.data.pickup_time}
                    </Typography>
                    <Typography>
                        Rating: {this.props.data.rating}
                    </Typography>
                    <Typography>Price: ${parseFloat(this.props.data.price).toFixed(2)}</Typography>
                    <br></br>
                    <Divider></Divider>
                    <br></br>
                    <Typography variant="h5">Reviews</Typography>
                    <br></br>
                    {this.props.data.reviews.map((review) => (
                        <Typography>
                            - "{review}"
                        </Typography>
                    ))}
                    <br></br>

                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleChange}>Close</Button>
                    <Button variant="contained" style={{backgroundColor: "green"}}onClick={this.handleChange}>Order</Button>
                </DialogActions>
            </Dialog>
        )
    }

    render() {
        return (
            <React.Fragment>
                <Card elevation={5}>
                    <CardActionArea
                        onClick={this.handleChange}
                    >
                        <CardMedia
                            component="img"
                            height="140"
                            image={this.props.data.thumbnail}
                            alt="photo of food"
                        />
                        <CardContent>
                        <Typography variant="h6" component="div">
                            {this.props.data.name}
                        </Typography>
                        <div style={stylingObject.tagContainer}>
                            {this.props.data.tags.map((tag) => (<h4 style={stylingObject.tag}>{tag}</h4>))}
                        </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {this.renderDialog()}
            </React.Fragment>
        )
    }
}
