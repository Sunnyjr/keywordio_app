import { IconButton, Toolbar, AppBar, Box, Typography, Button, Divider } from '@mui/material';
import React from 'react';
//  import MenuIcon from '@mui/icons-material';

const NavBar = () => {
    return (
        <>

            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="black"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            {/* <MenuIcon /> */}
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1,  fontWeight: 'bold'  }}>
                                APP LOGO
                            </Typography>
                        </IconButton>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>

                            <Typography variant="h6" sx={{ color: 'black' }}>
                                DASHBOARD
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'black' }}>
                                CREATE ADS
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    );
};

export default NavBar;