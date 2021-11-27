import { TextField, Button, Alert, Typography } from '@mui/material';
import React, { useState } from 'react';

const Review = () => {
    const [review, setReview] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e =>{
        setReview(e.target.value);
    }

    const handleReviewSubmit = e =>{
        const customerReview = {review};
        fetch('https://quiet-falls-16935.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customerReview)
        })
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            setSuccess(data);
        })
        e.preventDefault();
    }

    return (
        <div>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, my: 6 }}>
              Give Review
                </Typography>
            <form onSubmit={handleReviewSubmit}>
            <TextField  
            sx={{width: '50%'}}
            label="Review" 
            type="text"
            onBlur={handleOnBlur} 
            variant="standard" />
            <Button style={{ backgroundColor: '#EA3F3F' }} type="submit" variant="contained">Give Review</Button>
            </form>
            {
                            success && <Alert severity="success">Admin Maked Successfully Complete</Alert>
            }
        </div>
    );
};

export default Review;