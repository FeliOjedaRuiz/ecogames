import { Button, Container } from "@mui/material";
import logoJuego from "../assets/logos/Ecojuegos.png";
import porElClimaLogo from "../assets/logos/por_el_clima.svg";
import ayuMaracenaLogo from "../assets/logos/ayu_maracena.svg";
import locationLogo from "../assets/logos/logo_movilidad_europea.svg";
import federLogo from "../assets/logos/logo_feder.svg";
import { NavLink } from "react-router-dom";
import Layout from "../components/layouts/Layout";

// bg-gradient-to-b from-lime-500 via-teal-400 to-cyan-800

function HomePage() {
  return (
    <Layout>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "100vh",
        }}
      >
        <h1 className="text-center animate-fade-in3 text-5xl drop-shadow-lg font-semibold text-white  p-5">
          Casa de la <span className="text-6xl font-bold">Movilidad</span>
        </h1>

        <img
          className="h-60 w-s w-60  animate-logo-roll"
          src={logoJuego}
          alt="Logo Eco Juegos"
        />
        <NavLink to="/presentation" className="animate-pulse ">
          <Button sx={{ borderRadius: 2, marginTop: 2 }} variant="contained">
            Continuar
          </Button>
        </NavLink>

        <div className="h-40 w-screen overflow-hidden ">
          <div className="flex flex-col animate-slide-fliker">
            <div className="h-40  flex items-center justify-center ">
              <img
                className="h-28"
                src={porElClimaLogo}
                alt="logo Maracena por el clima"
              />
            </div>
            <div className="h-40 flex items-center justify-center ">
              <img
                className="h-20"
                src={ayuMaracenaLogo}
                alt="logo Ayuntamiento de Maracena"
              />
            </div>
            <div className="h-40 flex items-center justify-center ">
              <img
                className="h-20"
                src={locationLogo}
                alt="logo movilidad"
              />
            </div>
            <div className="h-40 flex items-center justify-center ">
              <img
                className="h-16"
                src={federLogo}
                alt="logo fondo europeo de desarrollo regional (FEDER)"
              />
            </div>
          </div>
        </div>
        
      </Container>
    </Layout>
  );
}

export default HomePage;

// <div className=" w-screen bg-white shadow-lg p-4 overflow-hidden">
//           <div className="flex justify-around animate-slide items-center">
//             <img
//               className="h-12 mx-8"
//               src={porElClimaLogo}
//               alt="logo Maracena por el clima"
//             />
//             <img
//               className="h-12 mx-8"
//               src={ayuMaracenaLogo}
//               alt="logo Ayuntamiento de Maracena"
//             />
//             <img
//               className="h-14 mx-8"
//               src={locationLogo}
//               alt="logo movilidad"
//             />
//             <img
//               className="h-12 mx-8"
//               src={federLogo}
//               alt="logo fondo europeo de desarrollo regional (FEDER)"
//             />
//           </div>
//         </div>
