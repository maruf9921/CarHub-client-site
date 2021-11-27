import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const {user, logOut} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ bgcolor: 'error.main' }} position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    CarHub
                </Typography>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/home"><Button color="inherit">Home</Button></Link>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/morecars"><Button color="inherit">More Cars</Button></Link>
                <Link style={{textDecoration: 'none', color: 'white'}} to="/pay"><Button color="inherit">Pay</Button></Link>
                {
                    user?.email ? 
                    <Box>
                        <Link style={{textDecoration: 'none', color: 'white'}} to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
                        <Button onClick={logOut} color="inherit">LogOut</Button>
                    </Box>
                     : <Link style={{textDecoration: 'none', color: 'white'}} to="/login"><Button color="inherit">Login</Button></Link>
                }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;