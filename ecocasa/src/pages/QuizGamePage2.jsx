import Layout from "../components/layouts/Layout";
import piramideMovilidad from "../assets/images/piramide-movilidad.png";

function QuizGamePage2() {
  return (
    <Layout>
      <div className="h-full screen flex flex-col justify-evenly">
        <div className="bg-gradient-to-b from-white to-gray-200 w-screen relative animate-slide1 -left-10 px-6 py-3 drop-shadow-lg rounded-lg">
          <p className="text-teal-600 drop-shadow-lg ml-7 leading-5 text-lg">
            Mira esta imagen y analiza los tipos de transporte, sus ventajas y
            desventajas.
            <p className="mt-2 font-bold">
              ¿Porque el transporte público es mejor opción que automóviles o
              motocicletas?
            </p>
          </p>
        </div>

        <div className="mb-2 mt-4 w-full p-2 justify-center flex animate-slide2">
          <img
            className="rounded-xl w-full border-4 border-teal-300 shadow-lg"
            src={piramideMovilidad}
            alt="Esquema de ciudad con movilidad sostenible"
          />
        </div>

        <div className="flex flex-col">
          <div className="bg-gradient-to-b from-lime-400 to-lime-500 m-2 p-2 animate-slide3 rounded-lg shadow-lg font-bold text-white leading-5">
            <span className="drop-shadow-md">A{") "} Porque se mueven más rápido.</span>
          </div>
          <div className="bg-gradient-to-b from-cyan-600 to-cyan-700 m-2 p-2 animate-slide4 rounded-lg shadow-lg font-bold text-white leading-5">
            <span className="drop-shadow-md">
            B{") "}Porque mover más gente a la vez es más eficiente.
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default QuizGamePage2;
