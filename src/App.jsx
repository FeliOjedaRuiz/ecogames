import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PresentationPage from "./pages/PresentationPage";
import QuizGamePage from "./pages/QuizGamePage";
import QuizGamePage2 from "./pages/QuizGamePage2";
import QuizGamePage3 from "./pages/QuizGamePage3";
import GameSelectionPage from "./pages/GameSelectionPage";
import Mision1Presentation from "./pages/Mision1Presentation";
import ProgressStore from "./contexts/ProgressStore";

function App() {
  return (
    <>
      <ProgressStore>
        <Routes>
          <Route path="/ecogames" element={<HomePage />} />
          <Route path="/ecogames/presentation" element={<PresentationPage />} />
          <Route
            path="/ecogames/game-selection"
            element={<GameSelectionPage />}
          />
          <Route path="/ecogames/mision1" element={<Mision1Presentation />} />
          <Route path="/ecogames/quiz-1" element={<QuizGamePage />} />
          <Route path="/ecogames/quiz-2" element={<QuizGamePage2 />} />
          <Route path="/ecogames/quiz-3" element={<QuizGamePage3 />} />
        </Routes>
      </ProgressStore>
    </>
  );
}

export default App;
