import { useNavigate } from "react-router-dom";
import ForwardIcon from "@mui/icons-material/Forward";
import ReplayIcon from "@mui/icons-material/Replay";
import RestartModal from "../modal/RestartModal";
import { useState } from "react";

function NavControls() {
  const navigate = useNavigate();
  const [restartModalState, setRestartModalState] = useState(false);

  return (
    <>
      <RestartModal
        restartModalState={restartModalState}
        setRestartModalState={setRestartModalState}
      >
        <ReplayIcon sx={{ fontSize: 150, color: "#ea580c" }} />
        <div className=" text-center font-bold text-black text-2xl mb-4 ">
          ¿Estas seguro de que deseas reiniciar el juego?
        </div>
        <div className="flex justify-evenly w-full">
          <button
            onClick={() => setRestartModalState(!restartModalState)}
            className="bg-orange-500 text-white m-2 px-3 py-2 rounded flex justify-center  font-medium text-lg"
          >
            Cancelar
          </button>
          <button
            onClick={() => navigate("/ecogames/")}
            className="bg-red-600 text-white m-2 px-3 py-2 rounded flex justify-center  font-medium text-lg"
          >
            Reiniciar
          </button>
        </div>
      </RestartModal>
      <div className="flex justify-evenly items-center fixed bg-gradient-to-b from-teal-400 to-teal-100 shadow-xl bottom-0 left-0 w-full h-16">
        {/* <div className="flex justify-evenly max-w-lg  mx-auto text-md md:text-xl font-medium "> */}
          <button
            onClick={() => setRestartModalState(!restartModalState)}
            className="text-white bg-gradient-to-b from-red-500 to-red-700 w-1/3 rounded-lg m-1 drop-shadow-md py-1"
          >
            <ReplayIcon
              sx={{
                fontSize: { xs: 30,
                md: 75, },
              }}
            />{" "}
            Reiniciar
          </button>
          <button
            onClick={() => navigate(-1)}
            className="text-white bg-gradient-to-b from-violet-500 to-violet-700 w-1/3 rounded-lg m-1 drop-shadow-md py-1"
          >
            <ForwardIcon
              sx={{
                transform: "rotate(180deg)",
                fontSize: { xs: 30,
                md: 75, },
              }}
            />{" "}
            Atrás
          </button>
        {/* </div> */}
      </div>
    </>
  );
}

export default NavControls;
