import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
import Navigation from '../../Shared/Navigation/Navigation';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()

    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <>
        <Navigation></Navigation>
        <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 20 }} item xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Register</Typography>
                        { !isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField 
                        sx={{ width: '75%', m:1 }}
                        id="standard-basic" 
                        label="Your Name"
                        type="text" 
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard" />
                        <TextField 
                        sx={{ width: '75%', m:1 }}
                        id="standard-basic" 
                        label="Your Email"
                        type="email" 
                        name="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                        <TextField
                        sx={{ width: '75%', m:1 }}
                        id="standard-password-input"
                        label="Your Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        autoComplete="current-password"
                        variant="standard"/>
                        <TextField
                        sx={{ width: '75%', m:1 }}
                        id="standard-password-input"
                        label="Re-type Your Password"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        autoComplete="current-password"
                        variant="standard"/>
                        
                        <Button type="submit" sx={{ width: '75%', m:1 }} style={{ backgroundColor: '#EA3F3F' }} variant="contained">Register</Button>
                        <NavLink style={{textDecoration: 'none'}} to="/login"><Button variant="text">Already Register?? Please Login</Button></NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {
                            user?.email && <Alert severity="success">Registation Successfully Complete</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ widt: '100%' }} src={login} alt="" />
                    </Grid>
                </Grid>
        </Container>
        </>
    );
};

export default Register;