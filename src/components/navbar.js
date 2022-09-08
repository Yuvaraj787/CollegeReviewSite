import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import {useSearchParams} from 'react-router-dom';
import {getCookie} from './login';
function NavBar(props) {
     const loggedIn = props.loggedIn;
     const username = getCookie("uno");
     return (
<nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Review Your college</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {loggedIn ?
        <li className="nav-item">
          <a className="nav-link" href="/profile/{getCookie('uno')}"><PersonIcon />{username}</a>
        </li>
         :
        <li className="nav-item">
          <a className="nav-link" href="/signup">Signup</a>
        </li>
        }
        {loggedIn ? 
          <li className="nav-item">
          <a className="nav-link" href="/login">Logout</a>
        </li> :
        <li className="nav-item">
          <a className="nav-link" href="/login"><PersonIcon />Login</a>
        </li>
        }
      </ul>
    </div>   
  </div>
</nav>
      )
    // return (<div>
    //    <ul className="navbar">
    //     <li className="item-brand"><strong>Review Your college</strong></li>
    //     <li className="item-home"><a className="item-link" href="/">Home</a></li>
    //    { loggedIn ? <div>
    //    <li className="item"><a className="item-link" href="/login">LogOut</a></li>
    //    <li className="item">{username}</li> 
    //    <li className="item"><a href="/profile"><PersonIcon /></a></li>
       
    //    </div> : <div>
    //    <li className="item"><a className="item-link" href="/login">Login</a></li>
    //    <li className="item"><a className="item-link" href="/signup">Sign Up</a></li>
    //    </div>
    //    }      
    //   </ul>
    // </div>)
}
export default NavBar;
