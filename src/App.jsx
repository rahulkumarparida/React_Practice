import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Toggle from "./Components/Toggle";
import User from "./Components/User";
import Form from "./Components/Form";
import Profile from "./Components/Profile";
import Temprature from "./Components/Temprature";
import Fruits from "./Components/Fruits";
import Content from "./Components/Content"
function App() {
  let [Uname, setName] = useState("Guest");
  function UserName() {
    let input = prompt("Write Your Name");
    setName(input);
  }

  return (
    <>
      {/* <h1>HELLO</h1>
  <Counter />
  <Toggle />
  <User name={Uname} />
  <button onClick={UserName}>Click to Add Name</button>

      <div>
        <Form />
      </div>
      <div>
        <Profile />
      </div>
      
      <div>
        <Temprature />
      </div> */}

      <div>
        <Fruits />
      </div>


      <div>
        <Content />
      </div>
    </>
  );
}

export default App;
