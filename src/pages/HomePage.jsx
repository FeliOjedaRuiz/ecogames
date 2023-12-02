import { Container } from "@mui/material";
import logoJuego from "../assets/logos/Ecojuegos.png";
import logoCasa from "../assets/logos/logo_casa_de_la_movilidad_blanco.svg";
import porElClimaLogo from "../assets/logos/por_el_clima.svg";
import ayuMaracenaLogo from "../assets/logos/ayu_maracena.svg";
import locationLogo from "../assets/logos/logo_movilidad_europea.svg";
import federLogo from "../assets/logos/logo_feder.svg";
import { NavLink } from "react-router-dom";
import intro from "../assets/mp3/intro.mp3";
import { useContext, useEffect } from "react";
import { ProgressContext } from "../contexts/ProgressStore";

function HomePage() {

  const { handleRemoveProgress } = useContext(ProgressContext)
  
  useEffect(() => {
    const introSound = new Audio(intro);
    introSound.play();
  }, []);

  return (
    <div className="bg-gradient-to-t from-white via-teal-400 to-cyan-800">
      <div className="portrait:hidden p-10 h-screen flex flex-col justify-evenly">
        <p className="text-center font-bold text-sm lg:text-3xl leading-4 text-white">
          Esta página fue desarrollada para su visualización exclusivamente en
          modo vertical.
        </p>
        <p className="text-center font-bold lg:text-5xl mt-5 leading-4 text-teal-800">
          ¡Por favor rotar el dispositivo a posición vertical.
        </p>
      </div>
      <div className="landscape:hidden">
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "100vh",
          }}
        >
          <img
            className="w-96  animate-fade-in3 drop-shadow-lg font-semibold text-white  p-5"
            src={logoCasa}
            alt="Logo Casa de la Movilidad"
          />

          <img
            className="h-60 w-60  animate-logo-roll"
            src={logoJuego}
            alt="Logo Eco Juegos"
          />
          <NavLink onClick={ handleRemoveProgress() }
            to="/ecogames/presentation"
            className="animate-pulse bg-amber-700 text-white text-xl font-medium px-4 py-2 rounded-lg "
          >
            Iniciar
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
                <img className="h-20" src={locationLogo} alt="logo movilidad" />
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
      </div>
    </div>
  );
}

export default HomePage;
