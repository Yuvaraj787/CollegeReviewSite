import React,{useState,useEffect} from "react";
import Plate from "./plate";
function Questions() {
  const [questions,setquestions] = useState([]);
  function getAll() {
  fetch("/questions").then(
    x => x.json()
  ).then((y) => {
    console.log(y);
    setquestions(y);
  })
  }
  useEffect(()=>{
    getAll();
  },[]);
  // getAll();
  return (
    <div>
      {questions.map((qn,ind)=>{
        return (
          <Plate key={ind} data={qn} />
        )
      })}
    </div>
  )
}
export default Questions;