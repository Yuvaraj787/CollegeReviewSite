import React,{ useState,useEffect } from "react";
import PersonIcon from '@mui/icons-material/Person';
import {getCookie} from './login';

function checkhim() {
      if (getCookie('uno')=='') {
        window.location.href="/signup";
      }
}
function Plate(props) {
    const {qnid,byname,qnhead,qnpart} = props.data;
    const profileRoute = "/profile/"+byname;
    const [answers,setAnswers] = useState([]);
    fetch("/getansid?qid="+qnid,{
      method:"post"
    }).then(data=>data.json()).then(y=>{
      setAnswers(y);
    })
    console.log(qnpart);
    return (
        <div>
        <div  className="plate">
        <p className="uname"><PersonIcon className="img" /><a href={profileRoute} className="username">{byname}</a></p>
          <h3>{qnhead}</h3>
          <p>{qnpart}</p>
        <details>
          <summary>View Answers({answers.length})</summary>
          {answers.map(ans=>{
            return <div>
        <p className="uname"><PersonIcon className="img" /><a href="/profile/{ans.byname}" className="username">{ans.byname}</a></p>
            <p>{ans.anspart}</p>
            </div> }) }
        </details>
        <br />
        <details className="adbox"><summary onClick={checkhim} className="btn btn-success btn-sm">Add Answer</summary>
         <form action="https://backendforcollegereviewsite.herokuapp.com/answers" method="post">
           <input type="text" value={qnid} name="qnId" style={{display:"none"}}/> 
           <textarea cols="25" rows="4" name="ansPart" placeHolder="Enter your answer here" required></textarea><br />
           <input type="text" name="byName" value={getCookie('uno')} style={{display:"none"}}/>
           <input type="submit" className="btn btn-success" value="post answer" />
         </form>
        </details>
        </div>   
        </div>
    )
}
export default Plate;
export {checkhim};
