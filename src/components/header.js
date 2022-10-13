import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <AppBar
        style={{ backgroundColor: '#F6F6FB', color: '#00003F' }}
        position="fixed"
        sx={{ width: `calc(100% - ${94}px)`, ml: `${94}px`, height: '87px' }}
    >
        <Toolbar>
            <Typography style={{ font: 'Barlow', fontWeight: 500, fontSize: "28px", lineHeight: '33.6px',marginBottom:15}} variant="h6" noWrap component="div">
                User Management
            </Typography>
        </Toolbar >
    </AppBar>
  )
}
export default Navbar;