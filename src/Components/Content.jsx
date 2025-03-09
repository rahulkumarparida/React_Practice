//? Q11. Create a to-do list where users can add and remove tasks. The list should be managed using useState.
import { useState } from "react";
import "./Content.css";
export default function Content() {
  let [input, setInput] = useState("");
  let [task, setTask] = useState([]);
  let [btn_txt, setBtn_txt] = useState("Revert");
  function handleSumbit(e) {
    setTask([...task, input]);
    setInput("");
    e.preventDefault();
  }

  function Comp(e) {
    let idc = e.target.getAttribute("id");
    console.log(idc);
    let parentNode;

    if (btn_txt == "Completed") {
      e.target.parentNode.style.opacity = 1;
      e.target.parentNode.style.color = "";
      e.target.innerText = btn_txt;
      setBtn_txt("Revert");
    } else {
      e.target.parentNode.style.opacity = 0.7;
      e.target.parentNode.style.color = "red";
      e.target.innerText = btn_txt;
      setBtn_txt("Completed");
      setTimeout(() => {
        alert("If Completed Delete the Task or Revert to REDO it");
      }, 300);
    }
  }

  function remove(e) {
    let idm = e.target.getAttribute("id");
    let Complete = document.getElementsByClassName("Complete");
    console.log(Complete);

    setTask(
      task.filter((ele, idx) => {
        return idx != idm;
      })
    );

    e.preventDefault();
  }

  return (
    <>
      <div className="Srh_Bar">
        <input
          type="text"
          required
          onChange={(e) => {
            setInput(e.target.value);
            e.preventDefault();
          }}
          placeholder="Enter the Task to ADD"
          value={input}
        />
        <button onClick={handleSumbit} disabled={input == ""}>
          ADD
        </button>
      </div>
      <div className="container">
        <ul>
          {task.map((ele, idx) => {
            return (
              <div key={idx}>
                <li>
                  <p className="TaskDisp">
                    {idx + 1}. {ele}
                  </p>
                </li>
                <button id={idx} onClick={Comp} className="Complete">
                  Completed
                </button>
                <button id={idx} onClick={remove}>
                  X
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
