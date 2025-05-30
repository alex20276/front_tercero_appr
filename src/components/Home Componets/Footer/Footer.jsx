"use client";
import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';
import { Box, Button, Grid, Typography } from '@mui/material';

export const Footer = ({}) => {
	return (
    <>
<Box
      sx={{
        bgcolor: '#25004D',
        color: 'white',
        py: 2,
        px: { xs: 3, md: 8 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: '10px', md: '10px' },
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: 1200,
          width: '100%',
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            pr: { md: 4 },
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              mb: 4,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Por que elegirnos
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                position: 'relative',
                pl: 3,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '12px',
                  height: '12px',
                  bgcolor: '#FFD700',
                },
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
              }}
            >
              Profesionalismo
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                ml: { md: 3 },
                mt: 1,
              }}
            >
              Contamos con un equipo de expertos en seguros
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                position: 'relative',
                pl: 3,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '12px',
                  height: '12px',
                  bgcolor: '#FFD700',
                },
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
              }}
            >
              Atención personalizada
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                ml: { md: 3 },
                mt: 1,
              }}
            >
              Brindamos un servicio adaptado a tus necesidades
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: 'center',
            mt: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            src="/light.png"
            alt="Ilustración de un foco"
            sx={{
              width: '100%',
              height: 'auto',
              maxWidth: '352px',
              maxHeight: '391.312px',
              objectFit: 'contain',
            }}
          />
        </Grid>
      </Grid>
    </Box>
    </>
  );
};
