import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Avatar } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonios = [
  { nombre: 'Ana', texto: 'Excelente servicio.', foto: '/ana.png' },
  { nombre: 'Carlos', texto: 'Muy confiable.', foto: '/carlos.png' }
];

const Testimonios = () => {
  const settings = {
    dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>Testimonios</Typography>
      <Slider {...settings}>
        {testimonios.map((testi, i) => (
          <Box key={i} sx={{ textAlign: 'center' }}>
            <Avatar src={testi.foto} alt='img' sx={{ width: 80, height: 80, mx: 'auto' }} />
            <Typography fontWeight="bold">{testi.nombre}</Typography>
            <Typography>{testi.texto}</Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Testimonios;