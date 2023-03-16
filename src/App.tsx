import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { RockPaperScissors } from './pages/rock-paper-scissors';

export const App = () => {
  return (
    <main className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
