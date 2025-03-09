//? Q6. Create a form with two input fields: "Name" and "Email". Update and display the values dynamically using useState
//? Q7. Create a form where the submit button is only enabled if both input fields (username and password) are filled.
import { useState } from "react";
import Drill from "./Drill";
import StatusMessage from "./StatusMessage";

export default function Form() {
  let [user, setUser] = useState({ user: "", email: "" });
  let [dispUser, setDispUser] = useState({
    user: user.user,
    email: user.email,
  });
  function HandleSumbit(e) {
    setDispUser(user);
    setUser({ user: "", email: "" });

    e.preventDefault();
  }
 
  return (
    <>
      <form onSubmit={HandleSumbit}>
        <input
          type="text"
          onChange={(e) => {
            setUser({ ...user, user: e.target.value.trim() });
          }}
          placeholder="Enter Name"
          value={user.user}
          required
        />
        <input
          type="email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value.trim() });
          }}
          placeholder="Enter email"
          value={user.email}
          required
        />
        <button type="sumbit" disabled={user.user == "" || user.email == ""}>
          Add
        </button>
      </form>
      <br />
      <p>Your Name is : {dispUser.user}</p>
      <p>Your Email is : {dispUser.email}</p>
      <Drill name={dispUser.user} />
      <StatusMessage Status={dispUser.user=="" || dispUser.email==""?"ERROR" : "SUCCESS"} />
    </>
  );
}
