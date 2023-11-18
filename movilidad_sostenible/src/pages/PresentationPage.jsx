import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";

function PresentationPage() {
  return (
    <div className="bg-gradient-to-t from-white via-teal-400 to-cyan-800 px-2 md:px-5">
    <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "100vh",
        }}
      >
      
        <h1 className="text-white drop-shadow-lg text-3xl leading-tight text-center font-bold">
          La movilidad sostenible cambiará nuestras vidas y ciudades... ¿Como?
        </h1>
        <div className="mx-2 md:text-xl p-5 bg-white/50 text-lg rounded-2xl text-cyan-900 font-medium">
          <p className="leading-tight">
            El alcalde de tu municipio ha oído hablar de ti, de tu grupo y de tu
            clase.{" "}
          </p>
          <p className="leading-tight mt-2">
            Quieren que les ayudes a construir la ciudad del futuro.
          </p>
          <p className="leading-tight mt-2">
            Para hacerlo tienes que entender antes cómo funciona el transporte
            en tu ciudad o pueblo, cuáles son los problemas actuales de la
            movilidad y cómo se pueden solucionar.{" "}
          </p>

          <p className="leading-tight mt-5 text-center text-3xl md:text-4xl">
            ¿Te atreves?
          </p>
        </div>
        <NavLink
          to="/game-selection"
          className=" animate-pulse text-center bg-amber-700 text-white text-xl md:text-2xl font-medium px-4 py-2 rounded-lg"
        >
          ¡A por ello!
        </NavLink>
      
      </Container>
    </div>
  );
}

export default PresentationPage;
