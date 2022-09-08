import React from 'react';
import {getCookie} from './login';
function Form() {
   return(
    <div className="qnroot"><div className="qnbox border border-success rounded">
    <form method="post" action="http://localhost:5000/questions">
    <input type="text" style={{display:"none"}} name="byName" value={getCookie('uno')} />
     <div className="row mb-3 mt-3">
            <span className="font-weight-bold">Question Heading</span>
            <input type="text" id="nn1" className="form-control" name="qnhead" required />
        </div>   
    <div className="row mb-3">
            <span>Enter your questions</span><br />
            <textarea className="form-control" cols="10" rows="10" name="qnpart" id="cp1" required />
    </div>
        <div className="mb-3">
            <input type="submit" className="btn btn-success" value="Post" />
        </div>
      </form>
      </div>
    </div>
   	)
}
export default Form;