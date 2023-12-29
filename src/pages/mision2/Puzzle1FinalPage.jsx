import Layout from "../../components/layouts/Layout";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import NavControls from "../../components/layouts/NavControls";
import FinalModal from "../../components/modal/FinalModal";
import WinIcon from "@mui/icons-material/EmojiEvents";
import final from "../../assets/mp3/final.mp3";
import { ProgressContext } from "../../contexts/ProgressStore";
import puzzleImage from "../../assets/images/puzzle19.png";

function Puzzle1FinalPage() {
  const [finalModalState, setFinalModalState] = useState(false);

  const { handleUnlockLevel2 } = useContext(ProgressContext);

  const finalSound = new Audio(final);

  const finalClick = () => {
    setFinalModalState(!finalModalState);
    finalSound.play();
    handleUnlockLevel2();
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-200 animate-slide1 px-6 py-3 drop-shadow-lg rounded-lg">
        <h2 className="text-teal-700 drop-shadow-lg text-center leading-5 text-3xl md:text-5xl font-extrabold">
          QUIZ PUZLE
        </h2>
      </div>

      <div className="w-full justify-center flex animate-slide2">
        <img
          className="w-full shadow-lg"
          src={puzzleImage}
          alt="Esquema de ciudad con movilidad sostenible"
        />
      </div>

      <div className=" animate-slide-r-2 px-6 py-3 drop-shadow-lg rounded-lg">
        <p className="text-white drop-shadow-lg text-center p-5 font-bold text-5xl">
          ¡Genial!
        </p>
      </div>
      <div
        onClick={() => finalClick()}
        className="bg-gradient-to-b from-green-500 to-green-800 p-2 animate-slide3 rounded-lg shadow-lg font-bold text-white"
      >
        <p className="drop-shadow-md text-center md:text-xl leading-6">
          Continuar
        </p>
      </div>

      <>
        <FinalModal
          finalModalState={finalModalState}
          setFinalModalState={setFinalModalState}
        >
          <div className="animate-zoom-trophy">
            <WinIcon
              sx={{
                fontSize: {xs:100,
                md: 500},
                color: "#ca8a04",
              }}
            />
          </div>
          <div className="text-center font-bold text-black mb-6 ">
            <p className="text-5xl ">¡Muy Bien!</p>
            <br />
            <p className=" md:text-3xl text-yellow-600">
              Has pasado tu primera misión.
            </p>
            <br />
            <p className="md:text-xl text-yellow-900">
              Ya has aprendido mucho sobre movilidad y transporte pero
              ¿sabes aplicar estos conocimientos a tu día a día?
            </p>
          </div>
          <NavLink to="/ecogames/game-selection">
            <button
              onClick={() => setFinalModalState(!finalModalState)}
              className="bg-gradient-to-t from-yellow-800 via-yellow-500 to-yellow-300 text-white drop-shadow-lg m-2 px-3 py-2 rounded justify-around font-medium md:text-3xl "
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

export default Puzzle1FinalPage;
