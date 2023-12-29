import { NavLink } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import NavControls from "../../components/layouts/NavControls";
import emisionesCompImage from "../../assets/images/comparacion-de-emisiones.jpeg";

function Mision2IntroPage2() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-around bg-gradient-to-b from-white to-slate-200 w-full h-full my-6 rounded-xl p-6 drop-shadow-lg animate-fade-in1">
        <h2 className="text-center font-extrabold text-2xl md:text-4xl mx-2 text-amber-700">
          Emisiones por medio de transporte
        </h2>
        <img
          className="rounded-xl w-full shadow-lg"
          src={emisionesCompImage}
          alt="Esquema de ciudad con movilidad sostenible"
        />

        <div className="md:text-xl font-medium px-3">
          <p className="leading-5 md:leading-7">
            Y en esta otra grafica puedes comparar los niveles de emisiones
            emitidos según el medio de transporte utilizado.
          </p>
        </div>
        <NavLink
          to="/ecogames/mision2intro3"
          className="bg-rose-700 text-white mt-6 px-3 py-1 rounded justify-around font-medium md:text-lg "
        >
          Seguir {">"}
        </NavLink>
      </div>
      <NavControls />
    </Layout>
  );
}

export default Mision2IntroPage2;
