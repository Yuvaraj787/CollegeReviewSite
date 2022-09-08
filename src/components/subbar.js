import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {getCookie} from './login';
function checkhim() {
    if (getCookie("uno")=='') {
        window.location.href="/signup"
    } else {
        window.location.href="/askqn"
    }
}
function SubBar() {
    return (
        <div>
      <ul className="subbar">
        <li className="item-brand popular"><h1 className="subhead">Popular Questions</h1></li>
        <li className="item"><button onClick={checkhim} className="btn btn-success add-btn">Ask Your <br />question</button></li>
      </ul> 
      <br />
      <br />
      </div>
    )
}
export default SubBar;