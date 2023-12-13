import { useState } from "react";
import Layout from "../components/layouts/Layout";
import NavControls from "../components/layouts/NavControls";
import WrongModal from "../components/modal/WrongModal";
import CorrectModal from "../components/modal/CorrectModal";
import { NavLink } from "react-router-dom";
import { CheckIcon } from "@mui/icons-material/Check";
import { CloseIcon } from "@mui/icons-material/Close";
import { EastIcon } from "@mui/icons-material/East";
import correct from "../assets/mp3/correct.mp3";
import wrong from "../assets/mp3/error.mp3";

function Puzzle1Page1() {
  const [wrongModalState, setWrongModalState] = useState(false);
  const [correctModalState, setCorrectModalState] = useState(false);

  const correctSound = new Audio(correct);
  const wrongSound = new Audio(wrong);

  const correctClick = () => {
    setCorrectModalState(!correctModalState);
    correctSound.play();
  };

  const wrongClick = () => {
    setWrongModalState(!wrongModalState);
    wrongSound.play();
  };

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
          alt="Esquema de ciudad con movilidad sostenible"
        />
      </div>

      <div
        onClick={() => wrongClick()}
        className="bg-gradient-to-b from-lime-500 to-lime-700  p-2 animate-slide3 rounded-lg shadow-lg font-bold text-white leading-5"
      >
        <span className="drop-shadow-md">
          A{")"} Poco, el principal objetivo es dar espacio a los coches para
          llegar rápido a los sitios.{" "}
        </span>
      </div>
      <div
        onClick={() => correctClick()}
        className="bg-gradient-to-b from-cyan-600 to-cyan-800  p-2 animate-slide4 rounded-lg shadow-lg font-bold text-white leading-5"
      >
        <span className="drop-shadow-md">
          B{")"} El espacio se reparte de una forma equilibrada entre peatones,
          coches y transporte público.{" "}
        </span>
      </div>

      <>
        <WrongModal
          wrongModalState={wrongModalState}
          setWrongModalState={setWrongModalState}
        >
          <CloseIcon sx={{ fontSize: 150, color: "red" }} />
          <div className="text-center font-bold text-black text-2xl mb-4 ">
            ¡Respuesta incorrecta!
          </div>

          <button
            onClick={() => setWrongModalState(!wrongModalState)}
            className="bg-red-500 text-white m-2 px-3 py-2 rounded flex justify-center  font-medium text-lg"
          >
            Volver a intentar
          </button>
        </WrongModal>
        <CorrectModal
          correctModalState={correctModalState}
          setCorrectModalState={setCorrectModalState}
        >
          <CheckIcon sx={{ fontSize: 150, color: "#059669" }} />
          <div className="text-center font-bold text-black mb-4 ">
            <p className="text-4xl">¡Correcto!</p>
            <br />
            <p className="text-2xl">Enhorabuena, vas por buen camino...</p>
          </div>

          <NavLink to="/ecogames/quiz-2">
            <button className="bg-emerald-600 text-white m-2 px-3 py-2 rounded justify-around font-medium text-lg ">
              <span className="mr-2">Siguente</span>
              <EastIcon sx={{ fontSize: 30 }} />
            </button>
          </NavLink>
        </CorrectModal>
      </>
      <NavControls />
    </Layout>
  );
}

export default Puzzle1Page1;
