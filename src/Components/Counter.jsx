//? Q1. Create a component with a button. Clicking the button should increase a counter by 1 using useState.
//? Q7. Create a parent component with a counter. The counter should be displayed in a child component, and the child should have a button to increment the counter.
//? Q13. Create a Parent component that contains a counter. The Child component should have a button that, when clicked, calls a function from the parent to increase the counter.
import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  let [clacby, setCalcby] = useState({ add: 1, sub: 1 });
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={(e) => {
          setCount(count + clacby.add);
          e.preventDefault();
        }}
      >
        Add
      </button>
      <button
        onClick={(e) => {
          setCount(count - clacby.sub);
          e.preventDefault();
        }}
      >
        Sub
      </button>
      <button
        onClick={(e) => {
          setCalcby({ ...clacby, add: clacby.add + 1 });
          e.preventDefault();
        }}
      >
        Increase by {clacby.add}
      </button>
      <button
        onClick={(e) => {
          setCalcby({ ...clacby, sub: clacby.sub + 1 });
          e.preventDefault();
        }}
      >
        Decrease by {clacby.sub}
      </button>
    </>
  );
}
