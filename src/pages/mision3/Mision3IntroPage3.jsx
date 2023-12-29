import { NavLink } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import NavControls from "../../components/layouts/NavControls";
import fullPuzzleImage from "../../assets/images/puzzle-completo.png";

function Mision3IntroPage3() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-around bg-gradient-to-b from-white to-slate-200 w-full h-full my-6 rounded-xl p-6 drop-shadow-lg animate-fade-in1">
        <h2 className="text-center font-extrabold text-4xl md:text-5xl mx-2 text-emerald-700">
          QUIZ PUZLE
        </h2>
        <img
          className="w-full shadow-lg"
          src={fullPuzzleImage}
          alt="Esquema de ciudad con movilidad sostenible"
        />

        <div className="text-md md:text-xl font-medium ">
          <p className="text-center">
          Hay 8 preguntas y cada respuesta correcta revela una parte del puzle hasta mostrar una imagen al final.
          </p>
        </div>
        <NavLink
          to="/ecogames/puzzle2-1"
          className="bg-rose-700 text-white mt-6 px-3 py-1 rounded justify-around font-medium text-lg "
        >
          Comenzar {">"}
        </NavLink>
      </div>
      <NavControls />
    </Layout>
  );
}

export default Mision3IntroPage3;