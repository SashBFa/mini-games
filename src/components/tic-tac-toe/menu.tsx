import { useState } from 'react';

type MenuType = {
  handleMode: (mode: boolean, strPlayer: string) => void;
};

export const Menu = ({ handleMode }: MenuType) => {
  const [nbrPlayer, setNbrPlayer] = useState<boolean | null>(null);
  return (
    <div className="pop-overlay">
      <div className="halo-effect">
        <h2 className="halo-title">Tic tac toe</h2>
        {nbrPlayer === null ? (
          <>
            <h3 className="halo-subtitle">Choix du mode de jeu :</h3>
            <div className="flex gap-6">
              <button className="btn-01" onClick={() => setNbrPlayer(true)}>
                1 joueur
              </button>
              <button className="btn-01" onClick={() => setNbrPlayer(false)}>
                2 joueurs
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="halo-subtitle">Choix du signe :</h3>
            <div className="flex gap-6">
              <button
                className="btn-01"
                onClick={() => handleMode(nbrPlayer, 'x')}
              >
                x
              </button>
              <button
                className="btn-01"
                onClick={() => handleMode(nbrPlayer, 'o')}
              >
                o
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
