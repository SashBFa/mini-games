type MenuType = {
  handleMode: (mode: boolean) => void;
};

export const Menu = () => {
  return (
    <div className="pop-overlay">
      <div className="halo-effect">
        <h2 className="halo-title">Tic tac toe</h2>
        <h3 className="halo-subtitle">Choix du mode de jeu :</h3>
        <div className="flex gap-6">
          <button className="btn-01">1 joueur</button>
          <button className="btn-01">2 joueurs</button>
        </div>
      </div>
    </div>
  );
};
