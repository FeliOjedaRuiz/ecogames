import Layout from "../components/layouts/Layout";
import planteoCiudad from "../assets/images/planteociudad.jpeg";

function QuizGamePage() {
  return (
    <Layout>
      <div className="flex flex-col justify-evenly">
        <div className="bg-white w-screen relative -left-10 px-6 py-3 mb-4 drop-shadow-lg rounded-lg">
          <p className="text-teal-600 drop-shadow-lg ml-7 leading-5 text-lg">
            Mira como es el diseño de las calles en una ciudad pensada para una
            movilidad sostenible.
            <p className="mt-2 font-bold">
              ¿Cuánto espacio se le da a los peatones?
            </p>
          </p>
        </div>

        <div className="mb-2 mt-4 w-full justify-center flex rounded-xl  ">
          <img
            className="rounded-xl w-4/5 border-4 border-teal-800"
            src={planteoCiudad}
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <div className="bg-lime-500 m-2 p-2 rounded-lg drop-shadow-md font-bold text-white leading-5">
            A{")"} Poco, el principal objetivo es dar espacio a los coches para
            llegar rápido a los sitios.{" "}
          </div>
          <div className="bg-teal-600 m-2 p-2 rounded-lg drop-shadow-md font-bold text-white leading-5">
            B{")"} El espacio se reparte de una forma más equilibrada entre
            peatón, coche privado y transporte público. Además se reserva
            espacio para zonas verdes y otros tipos de movilidad alternativa.{" "}
          </div>
          <div className="bg-cyan-700 m-2 p-2 rounded-lg drop-shadow-md font-bold text-white leading-5">
            C{")"} Poco, el principal objetivo es dar espacio a los coches para
            llegar rápido a los sitios.{" "}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default QuizGamePage;
