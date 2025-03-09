//? Q3. Create a User component that takes a name prop and displays "Hello, {name}".
//? Q4. Create an input field where users can type text, and display the text below the input field using useState.
//? Q5. Create a Greeting component that accepts a name prop, but if no name is provided, it should default to "Guest";

import { useState } from "react";

export default function User({ name }) {
  let [age, setAge] = useState();
  return (
    <>
      <br />{" "}
      <input
        type="text"
        placeholder="Enter age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <h1>Hello,{name}</h1>
      <h2>Your AGE is {age}</h2>
    </>
  );
}
