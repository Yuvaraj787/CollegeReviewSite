import React from 'react'
import Questions from './mainpage'
import NavBar from './navbar'
import Bar from "./subbar"
function homepage(props) {

  return (
    <div>
        <NavBar loggedIn={props.loggedIn}/>
        <Bar />
        <Questions />
    </div>
  )
}

export default homepage