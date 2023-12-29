import { NavLink } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import NavControls from "../../components/layouts/NavControls";

export default function Mision3Presentation() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-around bg-gradient-to-b from-white to-slate-200 w-full h-full mt-5 md:my-6 rounded-xl p-6 drop-shadow-lg animate-fade-in1">
        <h2 className="text-center font-extrabold text-4xl md:text-5xl m-1 text-amber-700">
          Misión 2
        </h2>
        <h3 className="text-center font-bold m-3 text-xl md:text-3xl leading-6 text-cyan-700 uppercase">
          Movilidad sostenible: <br /> ¿Qué puedes hacer tú?
        </h3>
        <div className="text-md  md:text-2xl mb-2 font-medium md:px-3">
          {/* <p className="leading-5 md:leading-6">
            Ahora que ya conoces la movilidad en las ciudades, vamos a
            transformarla para que sea más saludable y evite el cambio climático
            reduciendo las emisiones generadas por los tubos de escape.
          </p>
          <br /> */}
          <p className="leading-5 md:leading-7">
            Ahora vamos a ver que puedes hacer tú en tu día a día, los fines de
            semana y en las vacaciones para mejorar la movilidad y con esa la
            calidad del aire y disminuir las emisiones.
          </p>
          <br />
          <p className="leading-5 md:leading-7">
            Estudia estas dos diapositivas que te darán informaciones para
            contestar a algunas de las preguntas que siguen.
          </p>
        </div>
        <NavLink
          to="/ecogames/mision3intro1"
          className="bg-rose-700 text-white mt-6 px-3 py-2 rounded justify-around font-medium text-lg "
        >
          Comenzar
        </NavLink>
      </div>
      <NavControls />
    </Layout>
  );
}
