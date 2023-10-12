import { NavLink } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import { Button } from "@mui/material";

function PresentationPage() {
  return (
    <Layout className="">
      <div className="flex flex-col justify-evenly h-screen">
        <h1 className="my-5 text-white drop-shadow-lg text-3xl leading-tight text-center font-bold">
          La movilidad sostenible cambiará nuestras vidas y ciudades... ¿Como?
        </h1>
        <div className="my-5 p-5 bg-white/50 text-lg rounded-2xl text-cyan-900 font-medium">
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
          <p className="leading-tight mt-2">
            Al final, podrás dar tus sugerencias y contribuir a la movilidad
            sostenible del futuro.{" "}
          </p>
          <p className="leading-tight mt-2 text-center text-2xl">
            ¿Te atreves?
          </p>
        </div>
        <NavLink
          to="/quiz-1"
          className="my-5 animate-pulse flex justify-center "
        >
          <Button sx={{ borderRadius: 2 }} variant="contained">
            Iniciar <span className="ml-2 h-full">{">"}</span>
          </Button>
        </NavLink>
      </div>
    </Layout>
  );
}

export default PresentationPage;
