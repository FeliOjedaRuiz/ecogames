import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PresentationPage from "./pages/PresentationPage";
import QuizGamePage1 from "./pages/mision 1/QuizGamePage1";
import QuizGamePage2 from "./pages/mision 1/QuizGamePage2";
import QuizGamePage3 from "./pages/mision 1/QuizGamePage3";
import GameSelectionPage from "./pages/GameSelectionPage";
import Mision1Presentation from "./pages/mision 1/Mision1Presentation";
import ProgressStore from "./contexts/ProgressStore";
import Mision2Presentation from "./pages/mision 2/Mision2Presentation";
import Mision2IntroPage1 from "./pages/mision 2/Mision2IntroPage1";
import Mision2IntroPage2 from "./pages/mision 2/Mision2IntroPage2";
import Mision2IntroPage3 from "./pages/mision 2/Mision2IntroPage3";
import Puzzle1Page1 from "./pages/mision 2/Puzzle1Page1";
import Puzzle1Page2 from "./pages/mision 2/Puzzle1Page2";
import Puzzle1Page3 from "./pages/mision 2/Puzzle1Page3";
import Puzzle1Page4 from "./pages/mision 2/Puzzle1Page4";
import Puzzle1Page5 from "./pages/mision 2/Puzzle1Page5";
import Puzzle1Page6 from "./pages/mision 2/Puzzle1Page6";
import Puzzle1Page7 from "./pages/mision 2/Puzzle1Page7";
import Puzzle1Page8 from "./pages/mision 2/Puzzle1Page8";
import Puzzle1FinalPage from "./pages/mision 2/Puzzle1FinalPage";
import Mision3Presentation from "./pages/mision 3/Mision3Presentation";
import Mision3IntroPage1 from "./pages/mision 3/Mision3IntroPage1";
import Mision3IntroPage2 from "./pages/mision 3/Mision3IntroPage2";
import Mision3IntroPage3 from "./pages/mision 3/Mision3IntroPage3";
import Puzzle2Page1 from './pages/mision 3/Puzzle2Page1';
import Puzzle2Page2 from "./pages/mision 3/Puzzle2Page2";
import Puzzle2Page3 from "./pages/mision 3/Puzzle2Page3";
import Puzzle2Page4 from "./pages/mision 3/Puzzle2Page4";
import Puzzle2Page5 from "./pages/mision 3/Puzzle2Page5";
import Puzzle2Page6 from "./pages/mision 3/Puzzle2Page6";
import Puzzle2Page7 from "./pages/mision 3/Puzzle2Page7";
import Puzzle2Page8 from "./pages/mision 3/Puzzle2Page8";
import Puzzle2FinalPage from './pages/mision 3/Puzzle2FinalPage';

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
          <Route path="/ecogames/quiz-1" element={<QuizGamePage1 />} />
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
          <Route path="/ecogames/puzzle1-final" element={<Puzzle1FinalPage />} />
          <Route path="/ecogames/mision3" element={<Mision3Presentation />} />
          <Route
            path="/ecogames/mision3intro1"
            element={<Mision3IntroPage1 />}
          />
          <Route
            path="/ecogames/mision3intro2"
            element={<Mision3IntroPage2 />}
          />
          <Route
            path="/ecogames/mision3intro3"
            element={<Mision3IntroPage3 />}
          />
          <Route path="/ecogames/puzzle2-1" element={<Puzzle2Page1 />} />
          <Route path="/ecogames/puzzle2-2" element={<Puzzle2Page2 />} />
          <Route path="/ecogames/puzzle2-3" element={<Puzzle2Page3/>} />
          <Route path="/ecogames/puzzle2-4" element={<Puzzle2Page4 />} />
          <Route path="/ecogames/puzzle2-5" element={<Puzzle2Page5 />} />
          <Route path="/ecogames/puzzle2-6" element={<Puzzle2Page6 />} />
          <Route path="/ecogames/puzzle2-7" element={<Puzzle2Page7 />} />
          <Route path="/ecogames/puzzle2-8" element={<Puzzle2Page8 />} />
          <Route path="/ecogames/puzzle2-final" element={<Puzzle2FinalPage />} />
        </Routes>
      </ProgressStore>
    </>
  );
}

export default App;
