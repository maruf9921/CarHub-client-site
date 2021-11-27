import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Car = ({ car }) => {
    const {img, product, discription, price, _id} = car;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {discription}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    ${price}
                </Typography>
                </CardContent>
                <Link to={`/buynow/${_id}`}>
                <Button sx={{ width: '75%', m:1 }} style={{ backgroundColor: '#EA3F3F' }} variant="contained">Buy Now</Button>
                </Link>
            </CardActionArea>
        </Card>
    );
};

export default Car;