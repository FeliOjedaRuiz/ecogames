import { useState } from "react";
import Layout from "../../components/layouts/Layout";
import NavControls from "../../components/layouts/NavControls";
import WrongModal from "../../components/modal/WrongModal";
import CorrectModal from "../../components/modal/CorrectModal";
import { NavLink } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EastIcon from "@mui/icons-material/East";
import correct from "../../assets/mp3/correct.mp3";
import wrong from "../../assets/mp3/error.mp3";
import puzzleImage from "../../assets/images/puzzle26.png";

function Puzzle2Page6() {
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
        <h2 className="text-teal-700 drop-shadow-lg ml-7 leading-5 text-3xl md:text-5xl font-extrabold">
          QUIZ PUZLE - 06
        </h2>
      </div>

      <div className="w-full justify-center flex animate-slide2">
        <img
          className="w-full shadow-lg"
          src={puzzleImage}
          alt="Esquema de ciudad con movilidad sostenible"
        />
      </div>
      <div className="bg-gradient-to-b from-white to-gray-200 w-full animate-slide1 p-2 md:p-4 drop-shadow-lg rounded-lg">
        <p className="font-extrabold text-sm md:text-2xl text-center text-rose-700">
        ¿Cuál es el medio de transporte más sostenible para las vacaciones lejos de tu casa y hasta algún otro país al lado de España?
        </p>
      </div>
      <div
        onClick={() => correctClick()}
        className="bg-gradient-to-b from-orange-400 to-orange-700  p-2 animate-slide3 rounded-lg shadow-lg font-bold text-white"
      >
        <p className="drop-shadow-md text-center text-lg md:text-3xl leading-6">
          Tren
        </p>
      </div>
      <div
        onClick={() => wrongClick()}
        className="bg-gradient-to-b from-cyan-500 to-cyan-700  p-2 animate-slide4 rounded-lg shadow-lg font-bold text-white"
      >
        <p className="drop-shadow-md text-center text-lg md:text-3xl leading-6">
          Avión
        </p>
      </div>

      <>
        <WrongModal
          wrongModalState={wrongModalState}
          setWrongModalState={setWrongModalState}
        >
          <CloseIcon sx={{ fontSize: {xs:200,
                md: 500}, color: "red" }} />
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
          <CheckIcon sx={{ fontSize: {xs:200,
                md: 500}, color: "#059669" }} />
          <div className="text-center font-bold text-black mb-4 ">
            <p className="text-4xl">¡Correcto!</p>
            <br />
            <p className="text-2xl">Enhorabuena, vas por buen camino...</p>
          </div>

          <NavLink to="/ecogames/puzzle2-7">
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

export default Puzzle2Page6;
