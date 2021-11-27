import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './CarsProducts.css';

const CarsProducts = () => {
    const [cars, setCars] = useState([]);
    useEffect( () => {
        fetch('https://quiet-falls-16935.herokuapp.com/cars')
        .then(Response => Response.json())
        .then(data => setCars(data.slice(0,6)));
    }, [])
    return (
        <div>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, my: 6 }}>
              Brand New Cars
                </Typography>
        <div className="container py-5 cart">
            {
                cars.map(car => <Car key={car._id} car={car}></Car>)
            }
        </div>
        </div>


    );
};

export default CarsProducts;