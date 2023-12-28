import { NavLink } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import NavControls from "../../components/layouts/NavControls";

function Mision3IntroPage1() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-around bg-gradient-to-b from-white to-slate-200 w-full h-full my-6 rounded-xl p-6 drop-shadow-lg animate-fade-in1">
        <h2 className="text-center font-extrabold text-2xl md:text-4xl mx-2 text-amber-700">
          Consejos de movilidad sostenible
        </h2>
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/Cx0TrhO76WM?si=Xh0fe0r5GSVr8jXx"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div className="text-md md:text-2xl text-center font-medium px-3">
          <p className="">
            Mira este video con 6 consejos para una movilidad sostenible y menos
            contaminante.
          </p>
        </div>
        <NavLink
          to="/ecogames/mision3intro2"
          className="bg-rose-700 text-white mt-6 px-3 py-1 rounded justify-around font-medium text-lg "
        >
          Seguir {">"}
        </NavLink>
      </div>
      <NavControls />
    </Layout>
  );
}

export default Mision3IntroPage1;
