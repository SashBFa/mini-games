type ScoreInterfaceType = {
  scores: number[];
  names: string[];
};
export const ScoreInterface = ({ scores, names }: ScoreInterfaceType) => {
  const scoreName = [names[0], 'Egalité', names[1]];
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
