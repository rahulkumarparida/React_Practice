//? Q2. Create a button that toggles between "ON" and "OFF" when clicked using useState.

import { useState } from "react";

export default function Toggle() {
  let [state, setState] = useState("ON");
  return (
    <>
      <button
        onClick={(e) => {
          state == "ON" ? setState("OFF") : setState("ON");
          e.preventDefault();
        }}
      >
        {state}
      </button>
    </>
  );
}
