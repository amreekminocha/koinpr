import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MobileHeader() {
  return (
    <Box sx={{ flexGrow: 1,marginBottom:"6em" }}>
      <AppBar sx={{background:"black", }} position="fixed">
        <Toolbar sx={{padding:"0.6em"}} variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography sx={{ fontSize: "1rem", paddingLeft: "10%" }}>
                <div style={{fontWeight:"bold"}}>

                Koinpr

                </div>
                <p>
                A <span style={{fontWeight:"bold"}}>
                Todayq
                    </span> Product
                </p>
              </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
