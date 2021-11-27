import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box  sx={{ flexGrow: 1, bgcolor: 'error.main', color: 'white'}}>
      <Grid sx={{p:3}} container spacing={2}>
        <Grid item xs={6} md={4}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Privacy & Policy
                </Typography>
        <Typography variant="p" component="div" sx={{ flexGrow: 1, color: 'white' }}>
              Information
                </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
              About Us
                </Typography>
                <Typography variant="p" component="div" sx={{ flexGrow: 1, color: 'white' }}>
              Contact
                </Typography>
                <Typography variant="p" component="div" sx={{ flexGrow: 1, color: 'white' }}>
              Adderss
                </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
              Apply Our Company
                </Typography>
                <Typography variant="p" component="div" sx={{ flexGrow: 1, color: 'white' }}>
              Mearkiting
                </Typography>
                <Typography variant="p" component="div" sx={{ flexGrow: 1, color: 'white' }}>
              Delivery Man
                </Typography>



        </Grid>
      </Grid>
    </Box>
    );
};

export default Footer;