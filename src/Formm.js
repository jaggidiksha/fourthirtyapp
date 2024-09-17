import React from "react";
import { useState } from "react";

const Formm = () => {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [usererr, setusererr] = useState(false);
  const [passerr, setpasserr] = useState(false);

  function handlesubmit(e) {
    e.preventDefault();
    if (user.length <= 4 || pass.length <= 5) {
      alert("type correct values");
    } else {
      alert("all fine");
    }
  }

  function userhandler(e) {
    let item = e.target.value;
    if (item.length <= 4) {
      setusererr(true);
    } else {
      setusererr(false);
    }
    setuser(item);
  }

  function passhandler(e) {
    let item = e.target.value;
    if (item.length <= 5) {
      setpasserr(true);
    } else {
      setpasserr(false);
    }
    setpass(item);
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>login form</h1>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            value={user}
            placeholder="enter user id"
            onChange={userhandler}
          ></input>
          {usererr ? <span>user not valid</span> : ""}
          <br></br>
          <br></br>
          <input
            type="password"
            value={pass}
            placeholder="enter password value"
            onChange={passhandler}
          ></input>
          {passerr ? <span>password not valid</span> : ""}
          <br></br>
          <br></br>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Formm;
