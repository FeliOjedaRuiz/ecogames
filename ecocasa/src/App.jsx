import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PresentationPage from "./pages/PresentationPage";
import QuizGamePage from "./pages/QuizGamePage";


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/presentation" element={<PresentationPage />} />
      <Route path="/pregunta-1" element={<QuizGamePage />} />
      </Routes>
    </>
      
    
  );
}

export default App;
