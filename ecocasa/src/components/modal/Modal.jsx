import React from "react";

function Modal({ children, modalState }) {
  return (
    <>
      {modalState && (
        <div className="animate-fade-in0.4 w-screen h-screen fixed p-6 top-0 left-0 bg-red-500/50 z-20 flex justify-center items-center">
          <div className="animate-fade-in0.8 bg-white p-6 rounded-lg drop-shadow-xl flex flex-col items-center justify-around">
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
