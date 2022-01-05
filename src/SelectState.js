import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControlLabel } from '@material-ui/core/';
import "./SelectState.css";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';

const SelectState = () => {

    const [city, setcity] = useState(1);
    const [stateselect, setstateslelct] = useState([]);
    const [cityCall, setcityCall] = useState([]);
    const [statecode, setstatecode] = useState("");
    const [state, setstate] = useState("");


    useEffect(() => {
        function getState() {   
            fetch("https://talk-of-the-town.herokuapp.com/state", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                return response.json();
            }).then((data) => {
                setstateslelct([...data.baseStateResponseList])
                console.log(data);
            });
        }
        getState()
    }, []);
 
    useEffect(() => {
        function getCity() {
            if (statecode!=""){
            fetch(`https://talk-of-the-town.herokuapp.com/city?sc=${statecode}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                return response.json();
            }).then((data) => {
                setcityCall([...data.baseCityResponseDTOList]);
                console.log(data);
            });}
        }
        getCity()
    }, [statecode]);

    const UpdateState = (e) => {
        setstate(e.target.value);
        
    }
    useEffect(()=>{
        if (state!="")
        setstatecode(state.stateCode)
    })
    console.log(statecode);

    const Updatecity = (e) => {
        setcity(e.target.value);
    }

    return (
        <>
            <Container>
                <Typography className="heading">
                    Bussiness Of The Town
            </Typography>
                <Grid container className="grid_container" spacing={1} justify="center">
                    <Grid item lg={4}>
                        <Typography>Select State</Typography>
                        <FormControl>
                            <InputLabel>State</InputLabel>
                            <Select
                                onChange={UpdateState}
                                className="display">
                                <MenuItem value={stateselect}>
                                    <em>Select State</em>
                                </MenuItem>

                                {stateselect.map((item) => {
                                    return (<MenuItem value={item}>
                                        {item.stateName}
                                    </MenuItem>)
                                })}

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography>Select City</Typography>
                        <FormControl>
                        <InputLabel>City</InputLabel>
                            <Select value={city}
                                onChange={Updatecity}
                                className="display">
                                <MenuItem value="">
                                    <em>Select City</em>
                                </MenuItem>
                                {cityCall.map((cityname) => {
                                    return (<MenuItem value={cityname}>
                                        {cityname.cityName}
                                    </MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default SelectState;
