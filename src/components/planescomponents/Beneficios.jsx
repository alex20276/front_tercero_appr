import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const beneficios = [
  'Atención 24/7', 'Red de hospitales', 'Asesoría personalizada', 'Precios accesibles'
];

const Beneficios = () => (
  <Box sx={{ p: 4, backgroundColor: '#f3f3f3' }}>
    <br />
    <br />
    <Typography variant="h4" fontWeight="bold" gutterBottom>Beneficios</Typography>
    <br />
    <Grid container spacing={2} justifyContent="center">
      {beneficios.map((beneficio, idx) => (
        <Grid item xs={12} md={3} key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircleIcon color="success" sx={{ mr: 1 }} />
          <Typography>{beneficio}</Typography>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Beneficios;