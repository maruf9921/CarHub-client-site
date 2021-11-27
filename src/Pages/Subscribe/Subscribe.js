import { Container, TextField, Button } from '@mui/material';
import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="back-img">
            <Container>
            <TextField
            sx={{mt: 16, width: '50%'}}
          error
          id="outlined-error"
          type="email"
        />
            </Container>
            <Button style={{ backgroundColor: '#EA3F3F' }} type="submit" variant="contained">Subscribe</Button>
        </div>
    );
};

export default Subscribe;