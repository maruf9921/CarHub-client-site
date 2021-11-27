import React from 'react';
import { Grid } from '@mui/material';
import OrderList from '../OrderList/OrderList';

const DashboardHome = () => {
    return (
        <Grid spacing={2}>
              <OrderList></OrderList>
          </Grid>
    );
};

export default DashboardHome;