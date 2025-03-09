//? Q8. Pass a piece of state down multiple levels through props and update it from the deepest child component.

export default function Drill(props) {
  return (
    <>
      <h1>Hello , {props.name}</h1>
    </>
  );
}
