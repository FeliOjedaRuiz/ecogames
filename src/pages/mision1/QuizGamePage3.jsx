import Layout from "../../components/layouts/Layout";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import WrongModal from "../../components/modal/WrongModal";
import NavControls from "../../components/layouts/NavControls";
import goodCrossing from "../../assets/images/buen-cruce-bici.jpeg";
import badCrossing from "../../assets/images/mal-cruce-bici.jpeg";
import FinalModal from "../../components/modal/FinalModal";
import WinIcon from "@mui/icons-material/EmojiEvents";
import final from "../../assets/mp3/final.mp3";
import wrong from "../../assets/mp3/error.mp3";

function QuizGamePage3() {
  const [wrongModalState, setWrongModalState] = useState(false);
  const [finalModalState, setFinalModalState] = useState(false);

  const finalSound = new Audio(final);
  const wrongSound = new Audio(wrong);

  const finalClick = () => {
    setFinalModalState(!finalModalState);
    finalSound.play();
  };

  const wrongClick = () => {
    setWrongModalState(!wrongModalState);
    wrongSound.play();
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-200 animate-slide1 px-6 py-3 drop-shadow-lg rounded-lg">
        <p className="text-orange-600 drop-shadow-lg text-sm md:text-xl mb-2 text-center font-bold">
          Mira este video para saber cómo moverte en bici de forma segura.
        </p>
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/B4kocUmXaNg?si=Zmf6K9sEo5gTn9ab"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="bg-gradient-to-b from-white to-gray-200 animate-slide-r-2 px-4 py-2 drop-shadow-lg rounded-lg my-3">
        <p className="text-teal-700 drop-shadow-lg  md:leading-5 text-xs md:text-lg">
          Cuando vas caminando por una acera, ya sabes por dónde tienes que
          cruzar... <br /> Sí, por el paso de peatones.
          <p className="mt-2 font-bold text-rose-600">
            Pero cuando montas en bici por la calle, ¿Sabes cómo tienes que
            cruzar?
          </p>
        </p>
      </div>

      <div className="flex justify-evenly mb-1 ">
        <div
          onClick={() => wrongClick()}
          className="mr-2 w-2/5 animate-slide3 rounded-xl border-emerald-500 bg-emerald-500 text-center drop-shadow-lg font-bold text-white leading-5  overflow-hidden "
        >
          <p className="pt-2 pb-1 drop-shadow text-lg">Opción {`"A"`} </p>
          <img src={badCrossing} alt="Mal cruce" className="" />
        </div>
        <div
          onClick={() => finalClick()}
          className="ml-2 w-2/5 animate-slide-r-3 rounded-xl border-cyan-500 bg-cyan-500 text-center drop-shadow-lg font-bold text-white leading-5  overflow-hidden"
        >
          <p className="pt-2 pb-1 drop-shadow text-lg">Opción {`"B"`} </p>
          <img src={goodCrossing} alt="Buen cruce" className="" />
        </div>
      </div>

      <>
        <WrongModal
          wrongModalState={wrongModalState}
          setWrongModalState={setWrongModalState}
        >
          <CloseIcon sx={{ fontSize: { xs: 200, md: 500 }, color: "red" }} />
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
        <FinalModal
          finalModalState={finalModalState}
          setFinalModalState={setFinalModalState}
        >
          <div className="animate-zoom-trophy">
            <WinIcon
              sx={{
                fontSize: { xs: 200, md: 500 },
                color: "#ca8a04",
              }}
            />
          </div>
          <div className="text-center font-bold text-black mb-6 ">
            <p className="text-5xl ">¡Felicidades!</p>
            <br />
            <p className="text-xl md:text-3xl text-yellow-600">
              Has conseguido superar la tercera misión.
            </p>
            <br />
            <p className="md:text-xl text-yellow-900">
              Has aprendido como han evolucionado las ciudades y como nos
              movemos en ellas.
            </p>
            <br />
            <p className="md:text-xl text-yellow-900">
              Ahora vemos mejor el problema de las emisiones y como nuestro
              sistema de transporte está cambiando.
            </p>
          </div>
          <NavLink to="/ecogames/game-selection">
            <button
              onClick={() => setFinalModalState(!finalModalState)}
              className="bg-gradient-to-t from-yellow-800 via-yellow-500 to-yellow-300 text-white drop-shadow-lg m-2 px-3 py-2 rounded justify-around font-medium text-lg "
            >
              <span className="mx-1 drop-shadow-md">Continuar</span>
              {/* <EastIcon sx={{ fontSize: 30 }} /> */}
            </button>
          </NavLink>
        </FinalModal>
      </>
      <NavControls />
    </Layout>
  );
}

export default QuizGamePage3;
