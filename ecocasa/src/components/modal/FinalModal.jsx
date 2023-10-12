import Particles from "../confetti/Particles"

function FinalModal({ children, finalModalState }) {
  return (
    <div>
      {finalModalState && (
        <div>
          <div className="animate-fade-in0.3 w-screen h-full fixed p-6 bottom-0 left-0 bg-yellow-500/90 z-20 flex justify-center items-center">
          
            <div className="animate-fade-in0.5 bg-white p-6 rounded-2xl drop-shadow-xl flex flex-col items-center justify-around">
              {children}
            </div>
            <Particles id="tsparticles" /> 
          </div>
          
        </div>
      )}
    </div>
  );
}

export default FinalModal;
