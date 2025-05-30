import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ backgroundColor: '#25004D', color: '#fff', p: 3, textAlign: 'center' }}>
    <Typography>&copy; 2025 IntegriSeg | Todos los derechos reservados</Typography>
    <Typography>Tel: 0999999999 | Email: contacto@integriSeg.com</Typography>
    <Box>
      <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>Facebook</Link>
      <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>Instagram</Link>
    </Box>
  </Box>
);

export default Footer;