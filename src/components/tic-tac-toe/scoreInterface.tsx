type ScoreInterfaceType = {
  scores: number[];
};
export const ScoreInterface = ({ scores }: ScoreInterfaceType) => {
  const scoreName = ['Vous', 'Egalité', 'CPU'];
  return (
    <div className="flex items-center justify-between w-full max-w-xs mx-auto">
      {scores.map((score, index) => (
        <div key={index} className="score-block">
          <h4>{scoreName[index]}</h4>
          <p>{score}</p>
        </div>
      ))}
    </div>
  );
};
