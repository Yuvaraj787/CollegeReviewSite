import React,{useState,useEffect} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePage from './components/homepage';
import SignUp from './components/signup';
import NavBar from './components/navbar';
import Login,{getCookie} from './components/login';
import Profile from './components/profile';
import QuestionForm from './components/questionform';
function App() {
  const [loggedIn,setLogged] = useState(false);
  function checkCookie() {
  let username = getCookie("uno");
  let pwd = getCookie("pwd");
  if (username != "") {
     console.log(username);
     console.log(pwd)
     fetch("https://backendforcollegereviewsite.herokuapp.com/loginverify/"+username+"/"+pwd).then(x=>x.json()).then(y=>{
        console.log(y);
      if (y.correct) {
        //setcookie and redirect to home page
        setLogged(true)
      } else {
        //give incrt msg
        setLogged(false)
      }
      })
  } else {
    console.log("No cookie setted now");
  }
  }
  useEffect(()=>{
    checkCookie();
  },[])
  return (
    <div>
    <BrowserRouter>
    <Routes >
    <Route path='/' element={<HomePage loggedIn={loggedIn} />} />
    <Route path="/signup" element={<div><NavBar /><br /><SignUp /></div>} />
    <Route path='/login' element={<div><NavBar /><br /><Login /></div>} />
    <Route path="/profile/:username" element={<Profile />} />
    <Route path='/askqn' element={<QuestionForm />} />
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
