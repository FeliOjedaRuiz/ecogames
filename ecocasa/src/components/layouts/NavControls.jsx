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
            onClick={() => navigate("/")}
            className="bg-red-600 text-white m-2 px-3 py-2 rounded flex justify-center  font-medium text-lg"
          >
            Reiniciar
          </button>
        </div>
      </RestartModal>
      <div className="fixed bg-gradient-to-b from-teal-400 to-teal-100 shadow-xl bottom-0 left-0 w-full h-20">
        <div className="grid h-full max-w-lg grid-cols-2 mx-auto text-md font-medium p-2">
          <button onClick={() => setRestartModalState(!restartModalState)} className="text-white bg-gradient-to-b from-red-500 to-red-700  rounded-lg m-2 drop-shadow-md">
            <ReplayIcon
              sx={{
                fontSize: 35,
              }}
            /> Reiniciar
          </button>
          <button onClick={() => navigate(-1)} className="text-white bg-gradient-to-b from-violet-500 to-violet-700 rounded-lg m-2 drop-shadow-md">
            <ForwardIcon
              sx={{
                transform: "rotate(180deg)",
                fontSize: 45,
              }}
            /> Atrás
          </button>
        </div>
      </div>
    </>
  );
}

export default NavControls;
