import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PresentationPage from "./pages/PresentationPage";
import QuizGamePage from "./pages/QuizGamePage";
import QuizGamePage2 from "./pages/QuizGamePage2";
import QuizGamePage3 from "./pages/QuizGamePage3";
import GameSelectionPage from "./pages/GameSelectionPage";
import Mision1Presentation from "./pages/Mision1Presentation";


function App() {

  return (
    <>
      <Routes>
      <Route path="/ecogames" element={<HomePage />} />
      <Route path="/presentation" element={<PresentationPage />} />
      <Route path="/game-selection" element={<GameSelectionPage />} />
      <Route path="/mision1" element={<Mision1Presentation />} />
      <Route path="/quiz-1" element={<QuizGamePage />} />
      <Route path="/quiz-2" element={<QuizGamePage2 />} />
      <Route path="/quiz-3" element={<QuizGamePage3 />} />      
      </Routes>
    </>
      
    
  );
}

export default App;
