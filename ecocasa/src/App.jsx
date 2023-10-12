import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PresentationPage from "./pages/PresentationPage";
import QuizGamePage from "./pages/QuizGamePage";
import QuizGamePage2 from "./pages/QuizGamePage2";
import QuizGamePage3 from "./pages/QuizGamePage3";
import ConfettiPage from "./pages/ConfettiPage";


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/presentation" element={<PresentationPage />} />
      <Route path="/pregunta-1" element={<QuizGamePage />} />
      <Route path="/pregunta-2" element={<QuizGamePage2 />} />
      <Route path="/pregunta-3" element={<QuizGamePage3 />} />
      <Route path="/confetti" element={<ConfettiPage />} />
      </Routes>
    </>
      
    
  );
}

export default App;
