import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <NavLink to={'/rock-paper-scissors'}>
        <button className="btn-02">Pierre papier ciseaux</button>
      </NavLink>
      <NavLink to={'/tic-tac-toe'}>
        <button className="btn-02">tic tac toe</button>
      </NavLink>
      <NavLink to={'/sudoku'}>
        <button className="btn-02">sudoku</button>
      </NavLink>
    </div>
  );
};
