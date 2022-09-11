import React, { useState } from 'react'
import Plate from './plate';
function Profile() {
  const uname = window.location.pathname.split("/")[2];
  const [prof,setProf] = useState({})
  fetch("https://backendforcollegereviewsite.herokuapp.com/profile/"+uname,{
    method:"GET"
  }).then(x=>x.json()).then(y=>{
    setProf(y);
    console.log(y);
  })
  return (   
    <div style={{textAlign:"center"}}>
    {prof.username?
        <div className='border border-success pprof rounded' 
        style={
          {
            display:"inline-block",
            textAlign:"left",
            padding:"20px",
            boxShadow:"5px 10px",
            backgroundColor:"lightsteelblue",
            borderRadius:"10px 15px"
          }
             }>
          <h2>User Profile</h2>
           <h4>{prof.username}</h4>
           <p>User Id: {prof.userid}</p>
           <p>Status: <strong>{prof.currentstatus}</strong></p>
           <p>Institute: <strong>{prof.institute}</strong></p>
           <p>Class:<strong>{prof.class}</strong></p>
        </div>:<div className="img-box"><img src="https://media1.giphy.com/media/y1ZBcOGOOtlpC/200w.webp?cid=ecf05e47wds1c6n00n4dtpstygimby6trjwtk4od9ydr01ln&rid=200w.webp&ct=g" alt="loading" /></div>}
    </div>
  )
}

export default Profile;
