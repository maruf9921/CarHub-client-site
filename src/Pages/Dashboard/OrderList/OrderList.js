import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography, Button } from '@mui/material';

const OrderList = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect( () =>{
        const url =`https://quiet-falls-16935.herokuapp.com/buy?email=${user.email}`
        fetch(url)
        .then(Response => Response.json())
        .then(data => setOrders(data));
    }, []);

    const handleDeleteBuy = id =>{
        const url = `https://quiet-falls-16935.herokuapp.com/buy/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(Response => Response.json())
        .then(data => {
            if(data.deletedCount > 0 ){
                alert("Deleted Successfully");
                const remaniningBuyres = orders.filter(order => order._id !== id);
                setOrders(remaniningBuyres);
            }
        })
    }

    return (
        <Container>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, my: 6 }}>
              My Total Order List : {orders.length}
                </Typography>
            {/* <h2>Order List : {orders.length}</h2> */}
            <TableContainer sx={{px: 10}} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Orders table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Cars Model</TableCell>
                        <TableCell align="right">Price ($)</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Owner Name</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.carmodel}
                        </TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.customer}</TableCell>
                        <TableCell align="right"><Button onClick={() => handleDeleteBuy(row._id)} color="inherit">Cancel</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default OrderList;