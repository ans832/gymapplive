import React from 'react'
import { useState } from 'react'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CalcBmi = () => {
  
    
      
  const [height ,setheight ] = useState("")
  const [weight, setweight ] = useState("")
  const [gender, setgender ] = useState("")
  const [bmi, setbmi] = useState("")

  const calculatebmi = (e) =>{
    e.preventDefault();
    if(!height || !weight || !gender){
      toast.error("please fill the right info.");
      return;
    }

    const heightinmeters = height / 100;
    const bmivalue = (weight / (heightinmeters*heightinmeters)).toFixed(2);
    setbmi(bmivalue);
    if(bmivalue < 18.5){
      toast.error("you are over underweight");
    }
    else if(bmivalue >= 18.5 && bmivalue < 24.9){
      toast.success("you are going on good path keep going!!!!");
    }
    else if(bmivalue >= 25 && bmivalue < 29.9){
      toast.success("you are overweight please go to the gym!");
    }
    else{
      toast.error("too danger go and meet the doctor");

  }
}



  return (
    <section className='bmi'>
      <h1>BMI calculater</h1>
      <div className='container'>
        <div className='wrapper'>
          <form onSubmit={calculatebmi}>
            <div>
              <label>Height (cm)</label>
              <input type='number'
              value={height}
              onChange={(e) => setheight(e.target.value)}
              required
              />
            </div>
            <div>
              <label>Weight</label>
              <input type='text'
              value={weight}
              onChange={(e) => setweight(e.target.value)}
              required
              />
            </div>
            <div>
              <label></label>
              <select
              value={gender}
              onChange={(e) => setgender(e.target.value)}

              
              >
              <option value="">select gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
              </select>
            </div>
            <button type='submit'>Calculate BMI</button>
          </form>
        </div>
        <div className='wrapper'>
          <img src='bmi.jpg'/>
        </div>
      </div>
      <ToastContainer/>
    </section>
  );
};

    
  


export default CalcBmi
