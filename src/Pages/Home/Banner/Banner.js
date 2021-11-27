import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../images/carbg.jpg';
import car from '../../../images/carb.jpg';
import { Button, Typography, Container } from '@mui/material';


const bannerBackground = {
    background: `url(${bg})`,
    
}

const verticalCenter = {
    display: 'flex',
    height: 500,
    alignItems: 'center'
}

const Banner = () => {
    return (
        <Grid style={bannerBackground} sx={{ flexGrow: 1, my: 4, py: 4, borderRadius: 3}}>
          <Container>
          <Grid container spacing={2}>
        <Grid style={verticalCenter} item xs={12} md={6}>
          <img style={{width: '350px'}} src={car} alt="" />
        </Grid>
        <Grid style={{ ...verticalCenter, textAlign: 'left'}} item xs={12} md={6}>
          <Box>
          <Typography variant="h3">
            Happy Journey <br />  
            To Buy New Cars 
          </Typography>
          <Typography variant="h6" sx={{ fontSize: 14, color: "gray", fontWeight: 300 }}>
          Find Car Dealerships In Maryland. Large Selection. Always Sale. Cheap Prices. 
          Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply.
          </Typography>
          <Button variant='contained' style={{ backgroundColor: '#EA3F3F' }}>Find New Cars</Button>
          </Box>
        </Grid>
      </Grid>
          </Container>
      
    </Grid>
    );
};

export default Banner;