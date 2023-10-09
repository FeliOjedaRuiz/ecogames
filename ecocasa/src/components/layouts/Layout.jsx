function Layout({ children }) {
  return (
    <div className="relative">
      <div className="w-screen h-screen flex flex-col justify-evenly absolute -top-20 pt-20 pb-10 px-5 bg-gradient-to-t from-white via-teal-400 to-cyan-800 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default Layout;
