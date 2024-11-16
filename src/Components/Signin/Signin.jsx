import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import logo from '../assets/signin-g.svg'

const Signin = () => {
    const [showpassword,setshowpassword]=useState(false)
  return (
    <>
   <Box className="container mt-5">
   <Box className="d-flex justify-content-around align-items-center mt-5">
   <Box>
    <img src={logo} alt="" />
    </Box>
<Box>
<Typography variant='h5' className='text-start'>Sign in to FreshCart</Typography>
<Typography variant='body2'>Welcome back to FreshCart! Enter your email to get started.</Typography>

<Box>
<Box><TextField size='small' className='my-4' fullWidth type='email' placeholder=' Email'/></Box>
<Box><TextField size='small' className='mb-4' fullWidth type={showpassword?"text":"password"} 
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
<Typography className='mt-3 text-start' variant='body2'>Don’t have an account? <Link to="/signUp"> Sign Up</Link> </Typography>

</Box>

   </Box>
   </Box>
   </>
  )
}

export default Signin