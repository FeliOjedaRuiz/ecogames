import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PresentationPage from "./pages/PresentationPage";
import QuizGamePage from "./pages/QuizGamePage";
import QuizGamePage2 from "./pages/QuizGamePage2";
import QuizGamePage3 from "./pages/QuizGamePage3";
import GameSelectionPage from "./pages/GameSelectionPage";
import Mision1Presentation from "./pages/Mision1Presentation";
import ProgressStore from "./contexts/ProgressStore";
import Mision2Presentation from "./pages/Mision2Presentation";
import Mision2IntroPage1 from "./pages/Mision2IntroPage1";
import Mision2IntroPage2 from "./pages/Mision2IntroPage2";
import Mision2IntroPage3 from "./pages/Mision2IntroPage3";
import Puzzle1Page1 from "./pages/Puzzle1Page1";
import Puzzle1Page2 from "./pages/Puzzle1Page2";
import Puzzle1Page3 from "./pages/Puzzle1Page3";
import Puzzle1Page4 from "./pages/Puzzle1Page4";
import Puzzle1Page5 from "./pages/Puzzle1Page5";
import Puzzle1Page6 from "./pages/Puzzle1Page6";
import Puzzle1Page7 from "./pages/Puzzle1Page7";
import Puzzle1Page8 from "./pages/Puzzle1Page8";

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
          <Route path="/ecogames/mision2" element={<Mision2Presentation />} />
          <Route
            path="/ecogames/mision2intro1"
            element={<Mision2IntroPage1 />}
          />
          <Route
            path="/ecogames/mision2intro2"
            element={<Mision2IntroPage2 />}
          />
          <Route
            path="/ecogames/mision2intro3"
            element={<Mision2IntroPage3 />}
          />
          <Route path="/ecogames/puzzle1-1" element={<Puzzle1Page1 />} />
          <Route path="/ecogames/puzzle1-2" element={<Puzzle1Page2 />} />
          <Route path="/ecogames/puzzle1-3" element={<Puzzle1Page3 />} />
          <Route path="/ecogames/puzzle1-4" element={<Puzzle1Page4 />} />
          <Route path="/ecogames/puzzle1-5" element={<Puzzle1Page5 />} />
          <Route path="/ecogames/puzzle1-6" element={<Puzzle1Page6 />} />
          <Route path="/ecogames/puzzle1-7" element={<Puzzle1Page7 />} />
          <Route path="/ecogames/puzzle1-8" element={<Puzzle1Page8 />} />
        </Routes>
      </ProgressStore>
    </>
  );
}

export default App;
