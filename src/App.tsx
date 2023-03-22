import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { RockPaperScissors } from './pages/rock-paper-scissors';
import { Sudoku } from './pages/sudoku';
import { TicTacToe } from './pages/tic-tac-toe';

export const App = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/sudoku" element={<Sudoku />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
