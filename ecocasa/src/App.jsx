import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PresentationPage from "./pages/PresentationPage";
import QuizGamePage from "./pages/QuizGamePage";
import QuizGamePage2 from "./pages/QuizGamePage2";


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/presentation" element={<PresentationPage />} />
      <Route path="/pregunta-1" element={<QuizGamePage />} />
      <Route path="/pregunta-2" element={<QuizGamePage2 />} />
      </Routes>
    </>
      
    
  );
}

export default App;
