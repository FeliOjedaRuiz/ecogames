import Layout from "../components/layouts/Layout";
import planteoCiudad from "../assets/images/planteociudad.jpeg";
import Modal from "../components/modal/modal";
import ModalCorrect from "../components/modal/ModalCorrect";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import EastIcon from "@mui/icons-material/East";
import { NavLink } from "react-router-dom";
import NavControls from "../components/layouts/NavControls";

function QuizGamePage() {
  const [modalState, setModalState] = useState(false);
  const [modalCorrectState, setModalCorrectState] = useState(false);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-200 w-screen relative animate-slide1 -left-10 px-6 py-3 drop-shadow-lg rounded-lg">
        <p className="text-teal-700 drop-shadow-lg ml-7 leading-5 text-lg">
          Mira como es el diseño de las calles en una ciudad pensada para una
          movilidad sostenible.
          <p className="mt-2 font-bold text-orange-600">
            ¿Cuánto espacio se le da a los peatones?
          </p>
        </p>
      </div>

      <div className="w-full justify-center flex animate-slide2">
        <img
          className="rounded-xl w-full border-4 border-teal-300 shadow-lg"
          src={planteoCiudad}
          alt="Esquema de ciudad con movilidad sostenible"
        />
      </div>

      <div
        onClick={() => setModalState(!modalState)}
        className="bg-gradient-to-b from-lime-500 to-lime-700  p-2 animate-slide3 rounded-lg shadow-lg font-bold text-white leading-5"
      >
        <span className="drop-shadow-md">
          A{")"} Poco, el principal objetivo es dar espacio a los coches para
          llegar rápido a los sitios.{" "}
        </span>
      </div>
      <div
        onClick={() => setModalCorrectState(!modalCorrectState)}
        className="bg-gradient-to-b from-cyan-600 to-cyan-800  p-2 animate-slide4 rounded-lg shadow-lg font-bold text-white leading-5"
      >
        <span className="drop-shadow-md">
          B{")"} El espacio se reparte de una forma equilibrada entre peatones,
          coches y transporte público.{" "}
        </span>
      </div>

      <>
        <Modal modalState={modalState} setModalState={setModalState}>
          <CloseIcon sx={{ fontSize: 150, color: "red" }} />
          <div className="text-center font-bold text-black text-2xl mb-4 ">
            ¡Respuesta incorrecta!
          </div>

          <button
            onClick={() => setModalState(!modalState)}
            className="bg-red-500 text-white m-2 px-3 py-2 rounded flex justify-center  font-medium text-lg"
          >
            Volver a intentar
          </button>
        </Modal>
        <ModalCorrect
          modalCorrectState={modalCorrectState}
          setModalCorrectState={setModalCorrectState}
        >
          <CheckIcon sx={{ fontSize: 150, color: "#059669" }} />
          <div className="text-center font-bold text-black mb-4 ">
            <p className="text-4xl">¡Correcto!</p>
            <br />
            <p className="text-2xl">Enhorabuena, vas por buen camino...</p>
          </div>

          <NavLink to="/pregunta-2">
            <button
              onClick={() => setModalCorrectState(!modalCorrectState)}
              className="bg-emerald-600 text-white m-2 px-3 py-2 rounded justify-around font-medium text-lg "
            >
              <span className="mr-2">Siguente</span>
              <EastIcon sx={{ fontSize: 30 }} />
            </button>
          </NavLink>
        </ModalCorrect>
      </>
      <NavControls />
    </Layout>
  );
}

export default QuizGamePage;
