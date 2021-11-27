import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import SingleCars from '../SingleCars/SingleCars';
import './MoreCars.css';

const MoreCars = () => {
    const [morecars, setMorecars] = useState([]);

    useEffect( () => {
        fetch('https://quiet-falls-16935.herokuapp.com/cars')
        .then(Response => Response.json())
        .then(data => setMorecars(data));
    }, [])

    return (
        <>
        <Navigation></Navigation>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, my: 6 }}>
              Brand New Cars
                </Typography>
        <div className="container cart">
            {
                morecars.map(morecar => <SingleCars key={morecar._id} morecar={morecar}></SingleCars>)
            }
        </div>
        <Footer></Footer>
        </>
    );
};

export default MoreCars;