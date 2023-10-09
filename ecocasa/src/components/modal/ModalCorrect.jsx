import React from "react";

function ModalCorrect({ children, modalCorrectState }) {
  return (
    <>
      {modalCorrectState && (
        <div className="animate-fade-in0.3 w-screen h-screen fixed p-6 top-0 left-0 bg-emerald-500/50 z-20 flex justify-center items-center">
          <div className="animate-fade-in0.5 bg-white p-6 rounded-lg drop-shadow-xl flex flex-col items-center justify-around">
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default ModalCorrect;
