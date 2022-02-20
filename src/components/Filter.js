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
            rating: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, property, option = null) {
        this.setState({[property]: event.target.value});
        this.props.handleFilterChange(event, property, option)
    }

    render(){
        const {rating} = this.state;
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
                    value={rating}
                    onChange={(event, newValue) => {
                        this.handleChange(event, "rating");
                    }}
                />
                <br></br>
                <br></br>
                <Divider></Divider>
                <p style={{fontSize: "24px"}}>
                    Price
                </p>
                <TextField 
                    id="outlined-basic" 
                    type="number" label="Min" 
                    variant="outlined" 
                    size="small" 
                    onChange={(event, newValue) => {
                        this.handleChange(event, "minPrice");
                    }}
                />
                <br></br>
                <br></br>
                <TextField id="outlined-basic" 
                    type="number" label="Max" 
                    variant="outlined" 
                    size="small" 
                    onChange={(event, newValue) => {
                        this.handleChange(event, "maxPrice");
                    }}
                />
                <br></br>
                <br></br>
                <Divider></Divider>
                <p style={{fontSize: "24px"}}>
                    Dietary Restrictions
                </p>
                <FormGroup>
                    <FormControlLabel 
                        control={<Checkbox/>} 
                        label="Vegan" 
                        onChange={(event, newValue) => {
                            this.handleChange(event, "filters", "Vegan");
                        }}/>
                    <FormControlLabel 
                        control={<Checkbox />} 
                        label="Gluten Free"
                        onChange={(event, newValue) => {
                            this.handleChange(event, "filters", "Gluten Free");
                        }} 
                    />
                    <FormControlLabel 
                        control={<Checkbox />} 
                        label="Dairy Free" 
                        onChange={(event, newValue) => {
                            this.handleChange(event, "filters", "Dairy Free");
                        }}
                    />
                </FormGroup>
            </div>
        )
    }
    
}

export default Filter;
