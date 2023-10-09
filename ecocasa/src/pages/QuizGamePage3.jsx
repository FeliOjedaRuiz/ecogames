import Layout from "../components/layouts/Layout";
import ModalCorrect from "../components/modal/ModalCorrect";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import EastIcon from "@mui/icons-material/East";
import { useState } from "react";
import Modal from "../components/modal/modal";
import NavControls from "../components/layouts/NavControls";
import goodCrossing from "../assets/images/buen-cruce-bici.jpeg";
import badCrossing from "../assets/images/mal-cruce-bici.jpeg";

function QuizGamePage3() {
  const [modalState, setModalState] = useState(false);
  const [modalCorrectState, setModalCorrectState] = useState(false);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-200 animate-slide1 px-3 py-3 drop-shadow-lg rounded-lg">
        <p className="text-orange-600 drop-shadow-lg leading-5 text-lg mb-2 text-center font-medium">
          Mira este video para saber cómo moverte de forma segura por la calle
          en bici.
        </p>
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/B4kocUmXaNg?si=Zmf6K9sEo5gTn9ab"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="bg-gradient-to-b from-white to-gray-200 animate-slide1 px-6 py-3 drop-shadow-lg rounded-lg">
        <p className="text-teal-700 drop-shadow-lg  leading-5 text-md">
          Cuando vas caminando por una acera, ya sabes por dónde tienes que
          cruzar... Sí, por el paso de peatones.
          <p className="mt-2 font-bold text-rose-600">
            Pero cuando montas en bici por la calle, ¿sabes cómo tienes que
            cruzar?
          </p>
        </p>
      </div>

      <div className="flex justify-evenly ">
        <div
          onClick={() => setModalState(!modalState)}
          className="mr-2 w-3/6 animate-slide4 rounded-xl shadow-lg font-bold text-white leading-5 aspect-square overflow-hidden "
        >
          <img src={badCrossing} alt="Mal cruce" className="rounded-xl" />
        </div>
        <div
          onClick={() => setModalCorrectState(!modalCorrectState)}
          className="ml-2 w-3/6 animate-slide3 rounded-xl shadow-lg font-bold text-white leading-5 aspect-square overflow-hidden"
        >
          <img src={goodCrossing} alt="Buen cruce" className="rounded-xl " />
        </div>
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

          <NavLink to="/pregunta-3">
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

export default QuizGamePage3;
