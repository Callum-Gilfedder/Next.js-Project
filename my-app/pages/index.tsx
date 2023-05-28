import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NavigationBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#111', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Button sx={{ color: '#fff', backgroundColor: '#111', marginRight: '10px' }}>
            Goals
          </Button>
          <Button sx={{ color: '#fff', backgroundColor: '#111' }}>
            Notes
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
     <Box
     sx={{
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       width: '50%',
       height: '100vh',
       backgroundColor: "#111",
       margin: '0 auto',
       '@media (max-width: 600px)': {
         width: '100%',
       },
       
     }}
   ></Box>
    </>
  );
}