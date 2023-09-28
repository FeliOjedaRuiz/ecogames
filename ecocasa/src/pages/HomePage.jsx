import { Button, Container } from "@mui/material";
import logoJuego from "../assets/logos/Ecojuegos.png";
import porElClimaLogo from "../assets/logos/por_el_clima.svg";
import ayuMaracenaLogo from "../assets/logos/ayu_maracena.svg";

function HomePage() {
  return (
    <Container
      sx={{
        backgroundColor: "white",
    
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 className="text-center animate-fade-in text-6xl font-semibold text-teal-600 pt-10 p-5">
        Ecocasa
      </h1>

      <img className="h-72 w-72 m-10 animate-slide-down" src={logoJuego} alt="Logo Eco Juegos" />

      <div className="flex w-screen justify-around bg-white p-3 overflow-visible">
        <img
          className="h-14"
          src={porElClimaLogo}
          alt="logo Maracena por el clima"
        />
        <img
          className="h-14"
          src={ayuMaracenaLogo}
          alt="logo Ayuntamiento de Maracena"
        />
      </div>
      <div className="animate-pulse">
        <Button sx={{ borderRadius: 2, marginTop: 6 }} variant="contained">
          Jugar
        </Button>
      </div>
      <style>
      .logo {

      }
      
    </style>
    </Container>
    
  );
}

export default HomePage;



