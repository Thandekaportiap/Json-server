import { useEffect, useState } from 'react'


import './App.css'

function App() {

  const trainneDataURL = "http://localhost:4000/trainees";
  const [list, setList ] = useState([]);

useEffect(() => {
console.log("effect run")
const fetchTraineedata = async () =>{
console.log("running fetchtrainndata")

  try {
    const response = await fetch(trainneDataURL);
    const traineeData = await response.json();
    setList(traineeData);
    console.log("below is trainee data", traineeData )
  }
catch(error){
alert("error")
}

}
},[]
)

  const car = {type:"Fiat", model:"500", color:"white"};
  const trainee = {name:"Thandeka", surname:"mazibuko", color:"black", location:"PMB", gender:"female"}

  return (
    <>
      <h1>My name is { trainee.name}</h1>
      <p>I live at {trainee.location} and my favorite coloq
        r is {trainee.color}</p>
    </>
  )
}

export default App
