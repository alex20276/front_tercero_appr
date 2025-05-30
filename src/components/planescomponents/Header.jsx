import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#25004D' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="bold">IntegriSeg</Typography>
        <Box>
            <Button href="#inicio">Inicio</Button>
            <Button href="#planes">Planes</Button>
            <Button href="#beneficios">Beneficios</Button>
            <Button href="#testimonios">Testimonios</Button>
            <Button href="#contacto">Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
