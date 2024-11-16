
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../assets/signup-g.svg'


const SignUp = () => {
    const [showpassword,setshowpassword]=useState(false)
  return (
    <Box className="container mt-5">
    <Box className="d-flex justify-content-around">
    <Box>
            <img src={logo} alt="" />
        </Box>
    <Box>
        
        <Typography variant='h5' className='text-start'>Get Start Shopping</Typography>
        <Typography variant='body2' className='mb-4'>Welcome to FreshCart! Enter your email to get started.</Typography>
         

   
    <Box>
    <Box><TextField size='small' fullWidth type='email' placeholder=' First name'/></Box>
    <Box><TextField size='small' className='my-4' fullWidth type='email' placeholder=' Second name '/></Box>
    <Box><TextField size='small' fullWidth type='email' placeholder=' Email'/></Box>
    <Box><TextField size='small' className='my-4' fullWidth type={showpassword?"text":"password"} 
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="start" onClick={() => setshowpassword(!showpassword)}>
         {showpassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
    
            </InputAdornment>
          ),
        },
      }} placeholder=' password'/></Box>
    <Box>  <Button size='small' fullWidth variant='contained'> Sign in   </Button></Box>
    
    </Box>
    </Box>
    </Box>
       </Box>
      )
}

export default SignUp