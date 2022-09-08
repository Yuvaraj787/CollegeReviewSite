import React, { useState } from 'react'

  function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
  }
function Login() {
  const [cort,setcrt] = useState(false);
  function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  console.log(getCookie("uno"));
  function validate() {

      var un = document.querySelector("#nn1").value;
      var pd = document.querySelector("#cp1").value;
      fetch("/loginverify/"+un+"/"+pd).then(x=>x.json()).then(y=>{
        console.log(y);
      if (y.correct) {
        //setcookie and redirect to home page
        setCookie("uno",un,1)
        setCookie("pwd",pd,1)
        window.location.href="/"
      } else {
        //give incrt msg
      setcrt(true); 
      }
      })
  }
  return (
    <div className='signup'>
    <h2>Login</h2>
     <div className="row mb-3 mt-3">
            <span className="font-weight-bold">Username</span>
            {/* <span id="spec" className="errms">Please Do not use special characters on Username</span> */}
            <input type="text" id="nn1" className="form-control" name="lname" required />
        </div>   

    <div className="row mb-3">
            <span className="font-weight-bold">Confirm Password</span>
            {cort && <span id='war'>password incorrect</span>}              
            <input type="password" className="form-control" name="cpass" id="cp1" required />
    </div>
    <div className="mb-3">
            <input type="submit" className="btn btn-success" value="Login" onClick={validate} />
        </div>
        <span>Don't have an Account?<a href='/signup'>Sigup here</a></span>
</div>
  )
}

export default Login;
export {getCookie};