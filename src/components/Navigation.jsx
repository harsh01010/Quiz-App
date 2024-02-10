export default function Navigation({ questions }) {
  return (
    <div>
      {questions.map((curr) => (
        <Select index={curr.qNo} />
      ))}
    </div>
  );
}
function Select({ index }) {
  return <div>{index}</div>;
}
