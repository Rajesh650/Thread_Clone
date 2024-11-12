import { Button, Stack, Typography } from '@mui/material';
import errorImage from '../assets/error-bg.png';

const Error = () => {
  return (
    <Stack
      width={'100%'}
      height={'100vh'}
      flexDirection={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        backgroundImage: `url(${errorImage})`, // Correct URL syntax for the image
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', // Keep it if necessary
      }}
    >
      <Stack
        p={5}
        border={'2px solid black'}
        bgcolor={'wheat'}
        borderRadius={'10px'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={2}
        boxShadow={'7px 7px 7px wheat'}
      >
        <Typography variant='h3'>Oops!!</Typography> 
        <Typography variant='h6'>You are at the wrong location!</Typography> 
        <Button size='large' sx={{bgcolor:'blue',color:'white',borderRadius:'10px',p:2
            ,":hover":{
                bgcolor:'green',
                cursor:'pointer'
            }
        }}>Go Back !</Button>
      </Stack>
    </Stack>
  );
};

export default Error;
