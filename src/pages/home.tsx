import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <NavLink to={'/rock-paper-scissors'}>
        <button className="bg-white py-2 px-6 rounded-sm">
          Pierre papier ciseaux
        </button>
      </NavLink>
    </div>
  );
};
