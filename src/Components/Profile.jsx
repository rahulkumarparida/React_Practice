//? Q.12 Create a profile component with an object in state containing name, age, and email. Allow the user to update each field using an input field.

import { useState } from "react";

export default function Profile() {
  let [UserInfo, setUserInfo] = useState({ Name: "", age: "", email: "" });
  let [disp, setDisp] = useState({
    Name: "Jhon Doe",
    age: "69",
    email: "jhondoe69@gmail.com",
  });

  function handleSumbit(e) {
    setDisp(UserInfo);
    setUserInfo({ Name: "", age: "", email: "" });
    e.preventDefault();
  }
  return (
    <>
      <h1>Input to Update the displayed Values</h1>
      <form action="" onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            setUserInfo({ ...UserInfo, Name: e.target.value });

            e.preventDefault();
          }}
          value={UserInfo.Name}
          required
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter Age"
          onChange={(e) => {
            setUserInfo({ ...UserInfo, age: e.target.value });

            e.preventDefault();
          }}
          value={UserInfo.age}
          required
        />{" "}
        <br />
        <input
          type="email"
          placeholder="Enter Mail"
          onChange={(e) => {
            setUserInfo({ ...UserInfo, email: e.target.value });

            e.preventDefault();
          }}
          value={UserInfo.email}
          required
        />{" "}
        <br />
        <button type="Sumbit">Sumbit</button>
      </form>

      <div>
        <h1>Your Name is: {disp.Name}</h1>
        <h2>Your Age is :{disp.age} </h2>
        <h2>Your Mail is : {disp.email}</h2>
      </div>
    </>
  );
}
