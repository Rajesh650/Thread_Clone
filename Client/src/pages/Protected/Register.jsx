import React from 'react';
import { Stack, TextField, Typography, Button } from '@mui/material'; // Added Button
import Bgimage from '../../assets/register-bg.webp';

const Register = () => {
  return (
    <Stack
      width={'100%'}
      height={'100vh'}
      flexDirection={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        backgroundImage: `url(${Bgimage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Stack flexDirection={'column'} width={'40%'} gap={3} mt={10}>
        <Typography variant="h5" fontSize={"1.5rem"} fontWeight={'bold'} textAlign="center">
          Register with Email
        </Typography>
        
        {/* Text fields with labels */}
        <TextField variant='outlined' label='Username' placeholder='Enter your username' autoComplete='off'/>
        <TextField variant='outlined' label='Email' placeholder='Enter your email' autoComplete='off'/>
        <TextField variant='outlined' label='Password' placeholder='Enter your password' type='password' autoComplete='off'/>

        <Button 
          size="large"
          sx={{
            width: "100%",
            height: 52,
            bgcolor: "green",
            color: "white",
            fontSize: "1rem",
            ":hover": {
              bgcolor: "blue",
              cursor: "pointer",
            },
          }}
        >
          Sign Up
        </Button>
        <Typography variant='subtitle2' fontSize={"1.3rem"} alignSelf='center'>
            Already have an account ?<span className='login-link'>Login</span>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Register;
