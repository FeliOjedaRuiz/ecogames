import Layout from "../components/layouts/Layout";
import NavControls from "../components/layouts/NavControls";
import { NavLink } from "react-router-dom";
import bus from "../assets/images/bus.png";
import train from "../assets/images/train.png";
import bike from "../assets/images/bike.png";
import { ProgressContext } from "../contexts/ProgressStore";
import { useContext, useEffect, useState } from "react";

function GameSelectionPage() {
  
  const { progress } = useContext(ProgressContext)
  const [level2, setlevel2] = useState(false)
  const [level3, setlevel3] = useState(false)

  useEffect(() => {
    if (progress === 1) {
      setlevel2(false)
      setlevel3(false)      
    } else if (progress === 2) {
      setlevel2(true)    
    } else if (progress === 3) {
      setlevel3(true)
    }   
  }, [progress])


  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-slate-200 w-screen relative -left-5 p-4 drop-shadow-lg animate-fade-in1">
        <h2 className="text-center font-bold text-4xl md:text-5xl  uppercase bg-gradient-to-tl from-lime-600 via-teal-500 to-sky-700 text-transparent bg-clip-text leading-8 drop-shadow-md">
          ¡Completa las misiones!
        </h2>
      </div>
      
      <NavLink to="/ecogames/mision1" className="flex justify-evenly items-center bg-white/80 text-center h-28 rounded-lg p-3 drop-shadow-lg animate-slide-r-1">
        <span className="text-5xl w-1/12 m-2 font-extrabold text-cyan-600">
          1
        </span>
        <div className="flex flex-col w-7/12 justify-evenly items-center mr-2">
          <p className="text-xl md:text-2xl font-bold leading-6 ">
            Tipos de trasnporte y seguridad vial
          </p>
        </div>
        <div
          
          className="w-4/12 flex flex-col items-center overflow-visible "
        >
          <img src={bus} alt="" className="w-full z-10 animate-wiki" />
          <button className="bg-cyan-600 py-1 px-3 -mt-2 rounded text-white text-md md:text-xl font-medium">
            Comenzar
          </button>
        </div>
      </NavLink>
      { level2 && 
      <NavLink to="/ecogames/quiz-1" className="flex justify-evenly items-center bg-white/80 text-center h-28 rounded-lg p-3 drop-shadow-lg animate-slide2">
        <span className="text-5xl w-1/12 m-2 font-extrabold text-emerald-600">
          2
        </span>
        <div className="flex flex-col w-7/12 justify-evenly items-center mr-2">
          <p className="text-lg md:text-2xl font-bold leading-6 ">
            Cambio climático, calidad del aire y salud
          </p>
        </div>
        <div
          
          className="w-4/12 flex flex-col items-center overflow-visible "
        >
          <img src={train} alt="" className="w-full z-10 animate-wiki-r" />
          <button className="bg-emerald-600 py-1 px-3 -mt-2 rounded text-white text-md md:text-xl font-medium">
            Comenzar
          </button>
        </div>
      </NavLink> }
      { !level2 && 
      <div className="flex justify-evenly items-center bg-white/80 text-center h-28 rounded-lg p-3 drop-shadow-lg animate-slide2">
        <span className="text-5xl w-1/12 m-2 font-extrabold text-gray-400">
          2
        </span>
        <div className="flex flex-col w-7/12 justify-evenly items-center mr-2">
          <p className="text-lg md:text-2xl font-bold leading-6 text-gray-400 ">
            Cambio climático, calidad del aire y salud
          </p>
        </div>
        <div
          
          className="w-4/12 flex flex-col items-center overflow-visible "
        >
          <img src={train} alt="" className="w-full z-10 animate-wiki-r grayscale" />
          <button className="bg-gray-400 py-1 px-3 -mt-2 rounded text-gray-100 text-md md:text-xl font-medium">
            Comenzar
          </button>
        </div>
      </div> }
      { level3 &&
      <NavLink to="/ecogames/quiz-1" className="flex justify-evenly items-center bg-white/80 text-center h-28 rounded-lg p-3 drop-shadow-lg animate-slide-r-3">
        <span className="text-5xl w-1/12 m-2 font-extrabold text-lime-600">
          3
        </span>
        <div className="flex flex-col w-7/12 justify-evenly items-center mr-2">
          <p className="text-xl md:text-2xl font-bold leading-6 ">
            ¿Qué puedes <br /> hacer tú?
          </p>
        </div>
        <div
          
          className="w-4/12 flex flex-col items-center overflow-visible "
        >
          <img
            src={bike}
            alt=""
            className="h-24 z-10 animate-wiki relative -top-6"
          />
          <button className="bg-lime-600 py-1 px-3 -mt-9 rounded text-white text-md md:text-xl font-medium">
            Comenzar
          </button>
        </div>
      </NavLink>}
      { !level3 &&
      <div className="flex justify-evenly items-center bg-white/80 text-center h-28 rounded-lg p-3 drop-shadow-lg animate-slide-r-3">
        <span className="text-5xl w-1/12 m-2 font-extrabold text-gray-400">
          3
        </span>
        <div className="flex flex-col w-7/12 justify-evenly items-center mr-2">
          <p className="text-xl md:text-2xl font-bold leading-6 text-gray-400 ">
            ¿Qué puedes <br /> hacer tú?
          </p>
        </div>
        <div
          
          className="w-4/12 flex flex-col items-center overflow-visible "
        >
          <img
            src={bike}
            alt=""
            className="h-24 z-10 animate-wiki relative -top-6 grayscale"
          />
          <button className="bg-gray-400 py-1 px-3 -mt-9 rounded text-gray-100 text-md md:text-xl font-medium">
            Comenzar
          </button>
        </div>
      </div>}
      
      
      <NavControls />
    </Layout>
  );
}

export default GameSelectionPage;
