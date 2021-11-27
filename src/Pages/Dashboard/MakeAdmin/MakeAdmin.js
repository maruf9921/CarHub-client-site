import { TextField, Button, Alert, Typography } from '@mui/material';
import React, { useState } from 'react';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('https://quiet-falls-16935.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(Response => Response.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
            }
            
        })

        e.preventDefault()    
    }
    return (
        <div>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, my: 6 }}>
              Make Admin
                </Typography>
            <form onSubmit={handleAdminSubmit}>
            <TextField  
            sx={{width: '50%'}}
            label="Email" 
            type="email"
            onBlur={handleOnBlur} 
            variant="standard" />
            <Button style={{ backgroundColor: '#EA3F3F' }} type="submit" variant="contained">Make Admin</Button>
            </form>
            {
                            success && <Alert severity="success">Admin Maked Successfully Complete</Alert>
            }
        </div>
    );
};

export default MakeAdmin;