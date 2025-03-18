//? Q11. Create a to-do list where users can add and remove tasks. The list should be managed using useState.
import { useState } from "react";
import "./Content.css";
export default function Content() {
  let [input, setInput] = useState({ work: "", isCompleted: false });
  let [task, setTask] = useState([]);
  let [btn_txt, setBtn_txt] = useState("Revert");
  function handleSumbit(e) {
    setTask([...task, input]);
    setInput({ work: "", isCompleted: false });
    e.preventDefault();
  }

  function Comp(e) {
    let idc = e.target.getAttribute("id");

    let taskName = e.target.getAttribute("name");

    console.log(idc, " -- ", taskName);
    task.map((ele , idx) => {
      ele.work == taskName ? (ele.isCompleted = true) : ele;
      if (ele.isCompleted == true) {
        let getTask = document.getElementsByClassName("TaskDisp")
        getTask[idx].classList.add("completed")
        setBtn_txt("Revert");
        
      } else {
        console.log("nothing will happen");
        setBtn_txt("Completed");
      }
      
    });

    // console.log(task);

    // let parentNode;
    // if (btn_txt == "Completed") {
    //   e.target.parentNode.style.opacity = 1;
    //   e.target.parentNode.style.color = "";
    //   e.target.innerText = btn_txt;
    //   
    // } else {
    //   e.target.parentNode.style.opacity = 0.7;
    //   e.target.parentNode.style.color = "red";
    //   e.target.innerText = btn_txt;
    //  
    //   // setTimeout(() => {
    //   //   alert("If Completed Delete the Task or Revert to REDO it");
    //   // }, 300);
    // }
    e.preventDefault();
  }

  function remove(e) {
    let idm = e.target.getAttribute("id");
    let Complete = document.getElementsByClassName("Complete");
    // console.log(Complete);

    setTask(
      task.filter((ele, idx) => {
        return ele.work != idm;
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
            setInput({ ...input, work: e.target.value });
            e.preventDefault();
          }}
          placeholder="Enter the Task to ADD"
          value={input.work}
        />
        <button onClick={handleSumbit} disabled={input == ""}>
          ADD
        </button>
      </div>
      <div className="container">
        <ul>
          {task.map((ele, idx) => {
            return (
              <div key={ele.work} className="">
                <li>
                  <p className="TaskDisp">
                    {idx + 1}. {ele.work}
                  </p>
                </li>
                <button
                  id={idx}
                  name={ele.work}
                  onClick={Comp}
                  className="Complete"
                >
                  {btn_txt}
                </button>
                <button id={ele.work} onClick={remove}>
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
