type MenuType = {
  handleMode: (mode: boolean) => void;
};

export const Menu = ({ handleMode }: MenuType) => {
  return (
    <div className="popOverlay">
      <div className="w-96 h-72 bg-emerald-900 shadow-md shadow-white/30 rounded-lg flex flex-col items-center justify-center">
        <h2>Difficulté</h2>
        <div className="flex gap-6">
          <button onClick={() => handleMode(true)}>normal</button>
          <button onClick={() => handleMode(false)}>Difficile</button>
        </div>
      </div>
    </div>
  );
};
