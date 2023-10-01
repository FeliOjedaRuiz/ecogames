
function Layout({ children }) {
  return (
    <div className="min-h-screen w-screen p-5 bg-gradient-to-t from-white via-teal-400 to-cyan-800 overflow-hidden">
      { children }
    </div>
  )
}

export default Layout