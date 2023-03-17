type MenuType = {
  handleMode: (mode: boolean) => void;
};

export const Menu = ({ handleMode }: MenuType) => {
  return (
    <div className="pop-overlay">
      <div className="halo-effect">
        <h2 className="halo-title">Pierre Papier Ciseaux</h2>
        <h3 className="halo-subtitle">Choix de la difficulté :</h3>
        <div className="flex gap-6">
          <button onClick={() => handleMode(true)} className="btn-01">
            normal
          </button>
          <button onClick={() => handleMode(false)} className="btn-01">
            Difficile
          </button>
        </div>
      </div>
    </div>
  );
};
