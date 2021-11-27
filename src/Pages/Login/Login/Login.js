import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    return (
        <>
        <Navigation></Navigation>
        <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 20 }} item xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                        <TextField 
                        sx={{ width: '75%', m:1 }}
                        id="standard-basic" 
                        label="Your Email" 
                        name="email"
                        onChange={handleOnChange}
                        variant="standard" />
                        <TextField
                        sx={{ width: '75%', m:1 }}
                        id="standard-password-input"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        autoComplete="current-password"
                        variant="standard"/>
                        
                        <Button type="submit" sx={{ width: '75%', m:1 }} style={{ backgroundColor: '#EA3F3F' }} variant="contained">Login</Button>
                        <NavLink style={{textDecoration: 'none'}} to="/register"><Button variant="text">New User?? Please Register</Button></NavLink>
                        {isLoading && <CircularProgress />}
                        {
                            user?.email && <Alert severity="success">Registation Successfully Complete</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ widt: '100%' }} src={login} alt="" />
                    </Grid>
                </Grid>
        </Container>
        </>
    );
};

export default Login;