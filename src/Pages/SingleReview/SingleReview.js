import { Alert, AlertTitle, Grid, Typography } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';

const SingleReview = ({show}) => {
    const {review} = show;
    return (
        <Grid>
            <Alert severity="success">
            {review}
            </Alert>
        </Grid>
    );
};

export default SingleReview;