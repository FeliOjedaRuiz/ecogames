function Layout({ children }) {
  return (
    <div className="relative">
      <div className="portrait:hidden p-10 h-screen flex flex-col justify-evenly bg-gradient-to-t from-white via-teal-400 to-cyan-800">
        <p className="text-center font-bold text-sm lg:text-3xl leading-4 text-white">
          Esta página fue desarrollada para su visualización exclusivamente en
          modo vertical.
        </p>
        <p className="text-center font-bold lg:text-5xl mt-5 leading-4 text-teal-800">
          ¡Por favor rotar el dispositivo a posición vertical.
        </p>
      </div>
      <div className="landscape:hidden">
        <div className="w-screen h-screen flex flex-col justify-evenly absolute -top-16 pt-16 pb-14 md:pb-0 px-5 bg-gradient-to-t from-white via-teal-400 to-cyan-800 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
