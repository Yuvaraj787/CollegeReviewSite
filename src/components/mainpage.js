import React,{useState,useEffect} from "react";
import Plate from "./plate";
function Questions() {
  const [questions,setquestions] = useState([]);
  function getAll() {
  fetch("https://backendforcollegereviewsite.herokuapp.com/questions").then(
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
    {(questions.length==0)?<div className="img-box"><img src="https://media1.giphy.com/media/y1ZBcOGOOtlpC/200w.webp?cid=ecf05e47wds1c6n00n4dtpstygimby6trjwtk4od9ydr01ln&rid=200w.webp&ct=g" alt="loading" /></div>:<div>{questions.map((qn,ind)=>{
        return (
          <Plate key={ind} data={qn} />
        )
      })}</div>}
    </div>
  )
}
export default Questions;
