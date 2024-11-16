import { Box, Button, Card, Rating, Typography } from '@mui/material';
import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import "./style.css"


const ProductsCArds = (props) => {
    const {Productdata} = props;
  return (
 <>
   <Box className="d-flex justify-content-around mx-5"> 

{Productdata.map((item)=>{
return(
<Box className="">
<Card className='px-3'>
<img src={item.img} className='img-fluid' alt="" />
<Typography variant='body2'className='text-start'> {item.Category}</Typography>
<Typography variant='h5' className='text-start'> {item.Name}</Typography>
<Typography variant='body2' className='text-start'> ${item.Price}</Typography>
<Box className="d-flex align-items-center justify-content-between my-3">
<Typography variant='h6'><Rating name="read-only" value={3} readOnly /></Typography>
<Button variant="outlined"> <AddIcon /> Add</Button>
</Box>
</Card>
</Box>
)


})}
</Box>
 </>

)}

export default ProductsCArds