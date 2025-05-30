import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Contacto = () => (
  <Box sx={{ p: 4, backgroundColor: '#f9f9f9' }}>
    <Typography variant="h4" fontWeight="bold" gutterBottom>Contacto</Typography>
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
      <TextField label="Nombre" margin="normal" fullWidth required />
      <TextField label="Teléfono" margin="normal" fullWidth required />
      <TextField label="Email" margin="normal" fullWidth required />
      <Button variant="contained" sx={{ mt: 2, backgroundColor: '#25004D' }}>Solicitar asesoría gratuita</Button>
    </Box>
  </Box>
);

export default Contacto;