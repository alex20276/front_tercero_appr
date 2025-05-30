"use client";
import React from 'react';
import './DoshboardAgentes.css';
import { useState, useEffect } from 'react';
import { DashboardContent } from '../../components/Doshboard/DashboardContent';
import { PolizasContent } from '../../components/Doshboard/PolizasContent';
import { ClientesContent } from '../../components/Doshboard/ClientesContent';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { SidebarAgente } from '../../components/Sidebar/SidebarAgente';
import { useNavigate, useLocation } from 'react-router-dom';


// Hook personalizado para prevenir navegación hacia atrás
const usePreventBackNavigation = () => {
  const location = useLocation();

  useEffect(() => {
    // Agregar una entrada al historial para prevenir retroceso
    window.history.pushState(null, '', location.pathname);
    
    const handlePopState = (event) => {
      // Prevenir el retroceso manteniendo al usuario en la página actual
      window.history.pushState(null, '', location.pathname);
    };

    // Agregar el listener
    window.addEventListener('popstate', handlePopState);

    // Cleanup function
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location.pathname]);
};

export const DoshboardAgentes = ({}) => {
  const [seccionActiva, setSeccionActiva] = useState('Dashboard');
  const [dialogoCerrarSesion, setDialogoCerrarSesion] = useState(false);
  const navigate = useNavigate();

  // Implementar la protección de navegación hacia atrás
  usePreventBackNavigation();

  // Función para manejar el clic en "Cerrar Sesión"
  const handleCerrarSesionClick = () => {
    setDialogoCerrarSesion(true);
  };

  // Función para permanecer en la página (cerrar el diálogo)
  const handlePermanecerEnPagina = () => {
    setDialogoCerrarSesion(false);
  };

  // Función para cerrar el diálogo sin cerrar sesión (Cancelar)
  const handleCancelarCerrarSesion = () => {
    setDialogoCerrarSesion(false);
  };

  // Función para confirmar y cerrar sesión
  const handleConfirmarCerrarSesion = () => {
    // Limpiar datos de sesión
    localStorage.removeItem("usuario");
    localStorage.removeItem("isAuthenticated");

    // Cerrar el diálogo
    setDialogoCerrarSesion(false);

    // Limpiar historial completamente antes de redirigir
    window.history.replaceState(null, '', '/home');
    
    // Redirigir al home/login con replace para no agregar al historial
    navigate("/home", { replace: true });
  };

  // Función modificada para manejar la selección de sección
  const handleSeccionChange = (seccion) => {
    if (seccion === "Cerrar Sesión") {
      handleCerrarSesionClick();
    } else {
      setSeccionActiva(seccion);
    }
  };

  const renderContenido = () => {
    switch (seccionActiva) {
      case 'Dashboard':
        return <DashboardContent />;
      case 'Polizas':
        return <PolizasContent />;
      case 'Clientes':
        return <ClientesContent/>;
      case 'Reportes':
        return <h2>Visualización de Reportes</h2>;
      case 'Cerrar Sesión':
        return <h2>Sesión cerrada</h2>;
      default:
        return <h2>Selecciona una opción</h2>;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <SidebarAgente
        seccionActiva={seccionActiva}
        setSeccionActiva={handleSeccionChange}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {renderContenido()}
      </Box>

      {/* Diálogo de confirmación para cerrar sesión */}
      <Dialog
        open={dialogoCerrarSesion}
        onClose={handlePermanecerEnPagina}
        aria-labelledby="dialog-cerrar-sesion-titulo"
        aria-describedby="dialog-cerrar-sesion-descripcion"
      >
        <DialogTitle
          id="dialog-cerrar-sesion-titulo"
          sx={{
            backgroundColor: "#25004D",
            color: "white",
            textAlign: "center",
          }}
        >
          Cerrar Sesión
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <DialogContentText
            id="dialog-cerrar-sesion-descripcion"
            sx={{ textAlign: "center", fontSize: "1.1rem" }}
          >
            ¿Estás seguro de que deseas cerrar sesión?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3, gap: 0 }}>
          <Button
            onClick={handlePermanecerEnPagina}
            sx={{
              backgroundColor: "#f8f8f9",
              color: "black",
              "&:hover": {
                backgroundColor: "#beb8ff",
              },
              px: 2,
              fontWeight: "bold",
              fontSize: "0.9rem",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            Permanecer en la página
          </Button>
          <Button
            onClick={handleConfirmarCerrarSesion}
            sx={{
              backgroundColor: "#F8CF49",
              color: "#25004D",
              "&:hover": {
                backgroundColor: "#FCC100",
              },
              px: 2,
              fontWeight: "bold",
              fontSize: "0.9rem",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            autoFocus
          >
            Sí, Cerrar Sesión
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

DoshboardAgentes.propTypes = {};