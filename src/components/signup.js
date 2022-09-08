import React,{useState} from 'react';
function SignUp() {
    const [pass,setpass] = useState("");
    const [cpass,setcpass] = useState("");
    const [touched,setTouched] = useState(false);
    const [ctouched,setcTouched] = useState(false);
    const [alreadyTaken,setAlreadyTaken] = useState(false);
    function managePass() {
        setcTouched(true);
        setpass(document.querySelector("#sp").value);
    }
    function manageCpass() {
        setTouched(true);
        setcpass(document.querySelector("#cp").value);
    }
    function check_n_create(e) {
        e.preventDefault();
        fetch("/check?username="+document.querySelector("#nn").value,{
            method:"POST",
        }).then(data=>data.json()).then(x=>{
            console.log("original:"+x.isnewname);
            if (x.isnewname) {
                console.log("Yes it is new name we can continue");
                document.querySelector("#signupForm").submit();
                return true;
            } else {
                console.log("not a new name");
                setAlreadyTaken(true);
                return false;
            }
        })    
        }
    return (
    <div class="signup">
    <h2>Sign Up for a New Account!<br /></h2>
   <h5> signup/login to continue post questions and answer other questions</h5>
    <form id="signupForm" action='http://localhost:5000/createUser' method='post'>
        <div className="row mb-3 mt-3">
            <span className="font-weight-bold">Username</span>
            {alreadyTaken && <span className="war">Username already exist</span>}              
            <span id="spec" className="errms">Please Do not use special characters on Username</span>
            <input type="text" id="nn" className="form-control" name="username" required />
        </div>
        <div className="row mb-3 ml-3">
            <span className="font-weight-bold">You are a?</span>
            <div className="form-check">
            <input type="radio" name="currentStatus" value="School Student" id="op1"  className="form-check-input" />
            <label for="op1" className="form-check-label">School Student</label></div>
            <div className="form-check">
            <input type="radio" name="currentStatus" value="College Student" id="op2" className="form-check-input" />
            <label for="op2" className="form-check-label">College Student</label></div>
            <div className="form-check">
            <input type="radio" name="currentStatus" value="Passed Out" id="op3" className="form-check-input" />
            <label for="op3" className="form-check-label">Passed Out/Employee</label></div>
        </div>
        <div className="row mb-3">
            <span className="font-weight-bold">Institute Name</span>
            <input type="text" name="institute" className="form-control" required/>
        </div>
        <div className="row mb-3">
            <span className="font-weight-bold">Currently studying</span>
            <input type="text" name="classs" className="form-control" required/>
        </div>
        <div className="row mb-3">
            <span className="font-weight-bold">Set Password</span>{(ctouched && pass.length<8) ? <span id="limit">The password must contains atleast 8 characters</span> : null}
            <input type="password" className="form-control" onChange={managePass} value={pass} name="password" id="sp" required />
        </div>
        <div className="row mb-3">
            <span className="font-weight-bold">Confirm Password</span>{((pass !== cpass)&&touched) ? <span id="war">Password doesn't match</span> : null}<br />
            <input type="password" className="form-control" name="cpass" onChange={manageCpass} value={cpass} id="cp" required />
        </div>
        <div className="mb-3">
            <input type="submit" className="btn btn-success" value="Create Account" onClick={check_n_create} disabled={((pass !== cpass)&&touched&&ctouched&&pass.length < 8)} />
        </div>
    </form>
    <span>Already have an Account?<a href='/login'>Login here</a></span>
    </div> )
}
export default SignUp;