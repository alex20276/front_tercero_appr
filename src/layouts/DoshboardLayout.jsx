"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { DashboardContent } from "../components/Doshboard/DashboardContent";
import { PolizasContent } from "../components/Doshboard/PolizasContent";
import { ClientesContent } from "../components/Doshboard/ClientesContent";
import { RolesContent } from "../components/Doshboard/RolesContent";

export const DoshboardLayout = () => {
  const [seccionActiva, setSeccionActiva] = useState("Dashboard");
  const [dialogoCerrarSesion, setDialogoCerrarSesion] = useState(false);
  const navigate = useNavigate();

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

    // Redirigir al home/login
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
      case "Dashboard":
        return <DashboardContent />;
      case "Polizas":
        return <PolizasContent />;
      case "Clientes":
        return <ClientesContent />;
      case "Gestión de Roles":
        return <RolesContent />;
      case "Reportes":
        return <h2>Visualización de Reportes</h2>;
      default:
        return <h2>Selecciona una opción</h2>;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar
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
