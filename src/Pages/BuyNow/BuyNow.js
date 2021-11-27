import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TextField from '@mui/material/TextField';
import Navigation from '../Shared/Navigation/Navigation';
import useAuth from '../../hooks/useAuth';
import { Button } from '@mui/material';

const BuyNow = () => {
    const {buynowId} = useParams();
    const [cardetials, setCardetials] = useState([]);
    const [singlecar,setSinglecar] = useState({});

    const {user} = useAuth();

    useEffect( () => {
        fetch('https://quiet-falls-16935.herokuapp.com/cars')
        .then(Response => Response.json())
        .then(data => setCardetials(data));
    }, [])

    useEffect( () => {
        const foundCar = cardetials.find(car => car._id === buynowId);
        setSinglecar(foundCar);
    }, [cardetials])

    const initialInfo = {
        customer: user.displayName,
        email: user.email,
        carmodel: '',
        price: '',
        phone: '',
        address: ''

    }
    const [buyInfo, setBuyInfo] = useState(initialInfo);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...buyInfo};
        newInfo[field] = value;
        setBuyInfo(newInfo);
    }

    const handleBuySubmit = e => {

        const buynow = {
            ...buyInfo
        }
        // Send tO Server

        fetch('https://quiet-falls-16935.herokuapp.com/buy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buynow)
        })
        .then(Response => Response.json())
        .then(data => {
            if(data.insertedId){
                alert("Thank you, Purches Done")
            }
        })

        e.preventDefault();
    }



    return (
        <>
        <Navigation></Navigation>
        <Grid sx={{mt: 4}} container spacing={2}>
            <Grid item xs={12} md={6}>
                <img src={singlecar?.img} alt="" />
                <Typography variant="h4" component="h2">{singlecar?.product}</Typography>
                <Typography variant="h4" component="h2">${singlecar?.price}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <form onSubmit={handleBuySubmit}>
                    <TextField
                        sx={{width: '50%', m: 1}}
                        id="outlined-size-small"
                        name='customer'
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        size="small"
                        />
                    <TextField
                        sx={{width: '50%', m: 1}}
                        id="outlined-size-small"
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        size="small"
                        />
                    <TextField
                        required
                        sx={{width: '50%', m: 1}}
                        id="outlined-size-small"
                        name='carmodel'
                        onBlur={handleOnBlur}
                        placeholder="Car Model Must Filled"
                        size="small"
                        />
                    <TextField
                        required
                        sx={{width: '50%', m: 1}}
                        id="outlined-size-small"
                        name="price"
                        onBlur={handleOnBlur}
                        placeholder="Price Must Filled"
                        size="small"
                        />
                    <TextField
                        sx={{width: '50%', m: 1}}
                        id="outlined-size-small"
                        name="phone"
                        onBlur={handleOnBlur}
                        defaultValue="Phone Number"
                        size="small"
                        />
                    <TextField
                        sx={{width: '50%', m: 1}}
                        id="outlined-size-small"
                        name="address"
                        onBlur={handleOnBlur}
                        defaultValue="Your Address"
                        size="small"
                        />
                    <Button type="submit" sx={{ width: '50%', m:1 }} style={{ backgroundColor: '#EA3F3F' }} variant="contained">Submit</Button>
                </form>
            </Grid>
        </Grid>
        </>
    );
};

export default BuyNow;