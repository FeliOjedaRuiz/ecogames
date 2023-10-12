import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PresentationPage from "./pages/PresentationPage";
import QuizGamePage from "./pages/QuizGamePage";
import QuizGamePage2 from "./pages/QuizGamePage2";
import QuizGamePage3 from "./pages/QuizGamePage3";
import GameSelectionPage from "./pages/GameSelectionPage";


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/presentation" element={<PresentationPage />} />
      <Route path="/quiz-1" element={<QuizGamePage />} />
      <Route path="/quiz-2" element={<QuizGamePage2 />} />
      <Route path="/quiz-3" element={<QuizGamePage3 />} />
      <Route path="/game-selection" element={<GameSelectionPage />} />
      </Routes>
    </>
      
    
  );
}

export default App;
