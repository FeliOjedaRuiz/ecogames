import Layout from "../../components/layouts/Layout";
import piramideMovilidad from "../../assets/images/piramide-movilidad.png";
import CorrectModal from "../../components/modal/CorrectModal";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import EastIcon from "@mui/icons-material/East";
import { useState } from "react";
import WrongModal from "../../components/modal/WrongModal";
import NavControls from "../../components/layouts/NavControls";
import correct from "../../assets/mp3/correct.mp3";
import wrong from "../../assets/mp3/error.mp3";

function QuizGamePage2() {
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
      <div className="bg-gradient-to-b from-white to-gray-200 w-screen relative animate-slide1 -left-10 px-4 py-2 drop-shadow-lg rounded-lg">
        <p className="text-teal-700 drop-shadow-lg ml-7 leading-4 md:leading-6 text-sm md:text-xl">
          Mira esta imagen y analiza los tipos de transporte, sus ventajas y
          desventajas.
          <p className="mt-2 font-bold text-rose-600">
            ¿Porque el transporte público es mejor opción que automóviles o
            motocicletas?
          </p>
        </p>
      </div>

      <div className="w-full p-2 justify-center flex animate-slide2">
        <img
          className="rounded-xl w-10/12 md:w-full border-4 border-teal-300 shadow-lg"
          src={piramideMovilidad}
          alt="Esquema de ciudad con movilidad sostenible"
        />
      </div>

      <div
        onClick={() => correctClick()}
        className="bg-gradient-to-b from-amber-500 to-amber-700  m-2 p-2 animate-slide3 rounded-lg shadow-lg font-bold text-white leading-4 md:leading-5"
      >
        <span className="drop-shadow-md text-xs md:text-xl">
          B{") "}Porque mover más gente a la vez es más eficiente.
        </span>
      </div>
      <div
        onClick={() => wrongClick()}
        className="bg-gradient-to-b from-teal-500 to-teal-800 m-2 p-2 animate-slide4 rounded-lg shadow-lg font-bold text-white leading-4 md:leading-5"
      >
        <span className="drop-shadow-md text-xs md:text-xl">
          A{") "} Porque se mueven más rápido.
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
          <CheckIcon sx={{ fontSize: {xs:100,
                md: 500}, color: "#059669" }} />
          <div className="text-center font-bold text-black mb-4 ">
            <p className="text-4xl">¡Correcto!</p>
            <br />
            <p className="text-2xl">Enhorabuena, vas por buen camino...</p>
          </div>

          <NavLink to="/ecogames/quiz-3">
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

export default QuizGamePage2;
