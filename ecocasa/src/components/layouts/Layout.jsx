
function Layout({ children }) {
  return (
    <div className="h-screen w-screen p-5 bg-gradient-to-t from-white via-teal-400 to-cyan-800">
      { children }
    </div>
  )
}

export default Layout