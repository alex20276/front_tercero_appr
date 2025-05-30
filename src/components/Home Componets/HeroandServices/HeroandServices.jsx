"use client";
import React from "react";
import "./HeroandServices.css";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HeroandServices = ({}) => {
  const navigate = useNavigate(); 

  const irAPlanes = () => {
    navigate("/Planes"); 
  };
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
          sx={{ maxWidth: 1200, width: "100%" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "bold",
                color: "white",
                mb: 3,
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              }}
            >
              Empieza a proteger tu futuro hoy
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: "white",
                mb: 4,
                maxWidth: { xs: "100%", md: "800px" },
                margin: { xs: "0 auto", md: "0" },
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.35rem" },
              }}
            >
              Asegura tu bienestar y el de tu familia con nuestros seguros
              confiables. Comienza hoy mismo a construir un futuro más seguro y
              sin preocupaciones.
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFD700",
                fontSize: "1.1rem",
                px: 4,
                py: 1.5,
                color: "#25004D",
                fontWeight: "bold",
                borderRadius: 2,
                mt: 2,
                display: "inline-flex",
              }}
              onClick={irAPlanes} 
            >
              Ver planes
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "right" },
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-end" },
              height: "100%",
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box
              component="img"
              src="/miss.png"
              alt="Ilustración de seguridad con escudo y persona"
              sx={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: { xs: "300px", md: "400px" },
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          py: 8,
          px: { xs: 3, md: 8 },
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#25004D",
            mb: 6,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Nuestros Servicios
        </Typography>

        <Grid container spacing={25} justifyContent="center">
          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 4,
                minHeight: "200px",
                justifyContent: "flex-start",
              }}
            >
              <Box
                component="img"
                src="hearth.png"
                alt="Icono de Seguro de Vida"
                sx={{ height: 150, width: 150, mb: 2, color: "#25004D" }}
              />

              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#25004D",
                  mb: 1,
                }}
              >
                Seguro de vida
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: "250px", color:"#25004D" }}>
                Tranquilidad para ti, protección para los que amas.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 4,
                minHeight: "200px",
                justifyContent: "flex-start",
              }}
            >
              <Box
                component="img"
                src="/cruise.png"
                alt="Icono de Seguro de Salud"
                sx={{ height: 150, width: 150, mb: 2, color: "#25004D" }}
              />

              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#25004D",
                  mb: 1,
                }}
              >
                Seguro de salud
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: "250px",color:"#25004D" }}>
                Cuida tu bienestar con acceso rápido y seguro a atención médica
                de calidad.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
