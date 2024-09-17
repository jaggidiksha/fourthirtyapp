import React from "react";
import { useState } from "react";

const Form = () => {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [userErr, setuserErr] = useState(false);
  const [passErr, setpassErr] = useState(false);

  function loginhandle(e) {
    e.preventDefault();
    if (user.length <= 3 || pass.length <= 3) {
      alert("type correct values");
    } else {
      alert("all fine");
    }
  }


  function userhandler(e){
    let item=e.target.value
    if(item.length<=3){
        setuserErr(true);
    }else{
        setuserErr(false)
    }
    setuser(item)
  }


  function passhandler(e){
   let item=e.target.value
   if(item.length<=3){
    setpassErr(true)
   }else{
    setpassErr(false)
   }
   setpass(item)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>LOGIN FORM</h1>
      <form onSubmit={loginhandle}>
        <input type="text" placeholder="enter user id" value={user} onChange={userhandler}></input>{userErr?<span>user not valid</span>:""}
        <br></br>
        <br></br>
        <input type="password" placeholder="enter password id" value={pass} onChange={passhandler}></input>{passErr ? <span>password not valid</span>:""}
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
