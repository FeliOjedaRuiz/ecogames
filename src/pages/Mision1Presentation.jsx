import { NavLink } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import NavControls from "./../components/layouts/NavControls";

export default function Mision1Presentation() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-around bg-gradient-to-b from-white to-slate-200 w-full h-full mt-6 md:my-6 rounded-xl p-6 drop-shadow-lg animate-fade-in1">
        <h2 className="text-center font-bold text-5xl m-2 text-teal-700">
          Misión 2
        </h2>
        <h3 className="text-center font-bold m-3 text-2xl md:text-4xl leading-6 text-rose-700">
          Tipos de transporte <br /> y seguridad vial
        </h3>
        <div className="text-md md:text-2xl mb-3 font-medium leading-6">
          <p>
            En tu segunda misión vas a reflexionar sobre la movilidad en zonas
            urbanas, vamos a conocer qué tipos de transporte de personas hay y
            cómo moverte de forma segura por tu pueblo o ciudad.
          </p>
          <br />
          <p>
            Ahora vamos a ver cómo está cambiando y puede cambiar más el aspecto
            de las ciudades del futuro y vamos a ver si sabes desenvolverte en
            ellas con seguridad.
          </p>
        </div>
        <NavLink to="/ecogames/quiz-1" className="bg-rose-700 text-white px-3 py-2 rounded justify-around font-medium text-lg ">Comenzar</NavLink>
      </div>
      <NavControls />
    </Layout>
  );
}
