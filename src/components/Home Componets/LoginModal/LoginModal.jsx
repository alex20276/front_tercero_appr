"use client";
import React from "react";
import "./LoginModal.css";
import PropTypes from "prop-types";
const dialogStyle = {
  borderRadius: "16px",
};

const contentBoxStyle = {
  bgcolor: "#25004D",
  color: "white",
  py: 4,
  px: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: { xs: "90%", sm: "400px" },
  maxWidth: "500px",
};

const iconStyle = {
  fontSize: "4rem",
  color: "#FFD700",
  marginBottom: "24px",
};

const titleStyle = {
  fontWeight: "bold",
  marginBottom: "32px",
};

const inputStyle = {
  marginBottom: "24px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "white",
    "& input": {
      color: "#25004D",
    },
  },
  "& label": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
};

const buttonStyle = {
  bgcolor: "#FFD700",
  fontSize: "1.1rem",
  px: 4,
  py: 1.5,
  color: "#25004D",
  fontWeight: "bold",
  borderRadius: 8,
  textTransform: "none",
  "&:hover": {
    bgcolor: "#FCC100",
  },
};

const closeButtonStyle = {
  position: "absolute",
  top: "8px",
  right: "8px",
  color: "white",
};

export const LoginModal = ({}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ style: dialogStyle }}
    >
      <Box sx={contentBoxStyle} position="relative">
        <IconButton
          aria-label="close"
          onClick={handleClose}
          style={closeButtonStyle}
        >
          <CloseIcon />
        </IconButton>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <PeopleIcon style={iconStyle} />
          </Grid>
          <Grid item>
            <Typography variant="h6" style={titleStyle} align="center">
              Iniciar sesión
            </Typography>
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: "100%" }}
            >
              <TextField
                label="Correo electrónico"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
              <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
              />
              <Button type="submit" fullWidth style={buttonStyle}>
                Ingresar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};
