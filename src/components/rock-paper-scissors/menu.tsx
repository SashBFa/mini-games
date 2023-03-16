type MenuType = {
  handleMode: (mode: boolean) => void;
};

export const Menu = ({ handleMode }: MenuType) => {
  return (
    <div>
      <button onClick={() => handleMode(true)}>normal</button>
      <button onClick={() => handleMode(false)}>Difficile</button>
    </div>
  );
};
