import React, { useState } from 'react'
import Plate from './plate';
function Profile() {
  const uname = window.location.pathname.split("/")[2];
  const [prof,setProf] = useState({})
  fetch("/profile/"+uname,{
    method:"GET"
  }).then(x=>x.json()).then(y=>{
    setProf(y);
    console.log(y);
  })
  return (
    <div style={{textAlign:"center"}}>
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
        </div>
    </div>
  )
}

export default Profile;