import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const DisplayReview = () => {
    const [display, setDisplay] = useState([]);
    useEffect(() =>{
        fetch('https://quiet-falls-16935.herokuapp.com/review')
        .then(Response => Response.json())
        .then(data => setDisplay(data))
    }, [])
    return (
        <Container sx={{my: 8}}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Customers Reviews
                </Typography>
            {
                display.map(show => <SingleReview key={show._id} show={show}></SingleReview>)
            }
        </Container>
    );
};

export default DisplayReview;