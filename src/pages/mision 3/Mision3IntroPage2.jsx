import { NavLink } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import NavControls from "../../components/layouts/NavControls";
import emisionesImage from "../../assets/images/emisiones-pasajero-km.jpg";

function Mision3IntroPage2() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-around bg-gradient-to-b from-white to-slate-200 w-full h-full my-6 rounded-xl p-6 drop-shadow-lg animate-fade-in1">
        <h2 className="text-center font-extrabold text-xl md:text-4xl mx-2 text-amber-700">
          Emisiones por medio de transporte
        </h2>
        <img
          className="rounded-xl w-10/12 md:w-11/12  shadow-lg m-4"
          src={emisionesImage}
          alt="Esquema de ciudad con movilidad sostenible"
        />

        <div className="text-md md:text-xl font-medium px-3">
          <p className="leading-5 md:leading-7">
            En esta gráfica puedes ver las emisiones de CO2 originadas por el
            transporte en la Unión Europea. <br />
            ¡Obsérvala bien, necesitarás saberlo para tu misión!
          </p>
        </div>
        <NavLink
          to="/ecogames/mision3intro3"
          className="bg-rose-700 text-white mt-6 px-3 py-1 rounded justify-around font-medium md:text-lg "
        >
          Seguir {">"}
        </NavLink>
      </div>
      <NavControls />
    </Layout>
  );
}

export default Mision3IntroPage2;
