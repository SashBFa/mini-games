type ScoreInterfaceType = {
  scores: number[];
};
export const ScoreInterface = ({ scores }: ScoreInterfaceType) => {
  return (
    <div className="flex gap-12">
      {scores.map((score, index) => (
        <div key={index}>{score}</div>
      ))}
    </div>
  );
};
