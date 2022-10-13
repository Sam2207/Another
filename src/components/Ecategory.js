import React from 'react';
import { Box,Button } from '@material-ui';
// import  from '@material-ui/core';

const editCat= () => {
    return (
        <div>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3}}>
    <h3>.</h3></Box>
      <Box sx={{backgroundColor:"", width:"200px" , border: 2,borderColor: 'error.main' }}>
      <a href="#" style={{color:"#3de13d",fontSize:"12px",textDecoration:"none"}}> back</a>
        <Box style={{fontSize:"12px"}}>categories</Box>
      <input placeholder='Enter category Name'></input>
     <p> <Button size="small" sx={{fontSize:"12px",backgroundColor:"#22d822",color:"white",margin:1}}>ADD</Button> </p>

    </Box>            
        </div>
    )
    }

export default editCat;