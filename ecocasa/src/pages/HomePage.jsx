import React from "react";
import { Button, Container } from "@mui/material";
import porElClimaLogo from "../assets/logos/por_el_clima.svg";

function HomePage() {
  return (
    <Container
      sx={{
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 className="text-center text-4xl font-semibold text-white p-5">
        Ecocasa Maracena
      </h1>
      <img
        className=" w-8/12"
        src={porElClimaLogo}
        alt="logo Maracena por el clima"
      />

      <Button
        className="rounded-xl"
        sx={{ borderRadius: 4 }}
        variant="contained"
      >
        Botón
      </Button>
    </Container>
  );
}

export default HomePage;
