import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{
      height: '90vh',
      backgroundImage: `url('/ruta/a/tu/imagen.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: '#fff',
      textAlign: 'center',
      padding: 4,
    }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Protege tu vida y tu salud, asegura tu tranquilidad
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: '#ffcc00', color: '#000' }}>
        Solicita tu plan ahora
      </Button>
    </Box>
  );
};

export default Hero;