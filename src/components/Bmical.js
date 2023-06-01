
import React,{ useState } from "react";

function Bmical(){
const[weight, setWeight]=useState(0);
const[height, setHeight]=useState(0);
const[bmi, setBmi]=useState('');
const[message, setMessage]=useState('');

//Logic
let calcBmi = (e) => {
e.preventDefault();
if(weight===0 || height===0){
  alert("Please Enter a Valid Weight And Height");
}
else{
  let bmi = (weight/(height*height)*703)
  setBmi(bmi.toFixed(1))




  if(bmi<25){
    setMessage("You r underweight")
  }
  else if(bmi>25 && bmi<80){
    setMessage("You r healthy weight")
  }
  else{
    setMessage("You r Heavy Weight")
  }
}
}

let reload = () => {
  window.location.reload()
}

  
  return (
    <div className="App">
      <div className="container">
       <h2>Bmi Calculator</h2>
       <form onSubmit={calcBmi}>

        <div>
          <label>Weight (lbs)</label>
          <input type="text" placeholder="Enter Weight Value" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Height (in)</label>
          <input type="text" placeholder="Enter Height Value" value={height}  onChange={(e) => setHeight(e.target.value)}  />
        </div>
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
        <div className="center">
<h1>Your BMI is: {bmi}</h1>
        <p>{message}</p>
        </div>

       </form>
      </div>
    </div>
  )
}

export default Bmical
