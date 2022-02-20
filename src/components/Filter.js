import React from 'react';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

var stylingObjects = {
    container: {
        width: "100%",
        height: "100%",
        padding: "20px"
    }
}
class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratingFilter: 4
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, property) {
        this.setState({[property]: event.target.value});
    }

    render(){
        const {ratingFilter} = this.state;
        return(
            <div style={stylingObjects.container}>
                <h1>
                    Filters
                </h1>
                <p style={{fontSize: "24px"}}>
                    Rating
                </p>
                <Rating
                    name="simple-controlled"
                    value={ratingFilter}
                    onChange={(event, newValue) => {
                        this.handleChange(event, "ratingFilter");
                    }}
                />
                <br></br>
                <br></br>
                <Divider></Divider>
                <p style={{fontSize: "24px"}}>
                    Price
                </p>
                <TextField id="outlined-basic" type="number" label="Min" variant="outlined" size="small" />
                <br></br>
                <br></br>
                <TextField id="outlined-basic" type="number" label="Max" variant="outlined" size="small" />
                <br></br>
                <br></br>
                <Divider></Divider>
                <p style={{fontSize: "24px"}}>
                    Options
                </p>
                <FormGroup>
                    <FormControlLabel control={<Checkbox/>} label="Vegan" />
                    <FormControlLabel control={<Checkbox />} label="Gluten Free" />
                    <FormControlLabel control={<Checkbox />} label="Dairy Free" />
                </FormGroup>
            </div>
        )
    }
    
}

export default Filter;
