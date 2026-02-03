import { useState } from "react";

function Work({ onUpdate }){
   const [name, setName] = useState('')  
   const [time, setTime] = useState('')  
   const [caloriesPerMinute, setCaloriesPerMinute] = useState('')  

   const handleClearLog = () => {
      setName('');
      setTime('');
      setCaloriesPerMinute('');
      if (onUpdate) onUpdate('', '', '');
   };

   const handleNameChange = (e) => {
      setName(e.target.value);
      if (onUpdate) onUpdate(e.target.value, time, caloriesPerMinute);
   };

   const handleTimeChange = (e) => {
      setTime(e.target.value);
      if (onUpdate) onUpdate(name, e.target.value, caloriesPerMinute);
   };

   const handleCaloriesChange = (e) => {
      setCaloriesPerMinute(e.target.value);
      if (onUpdate) onUpdate(name, time, e.target.value);
   };

   return(
      <>
      <h2>Workout details</h2>
      <h2>Excercise Name</h2>
      <input type="text" placeholder="e.g., Running" value={name} onChange={handleNameChange} /><br/>
      <h2>Duration (Minutes)</h2>
      <input type="number" placeholder=" Enter duration in minutes" value={time} onChange={handleTimeChange} /><br/>
      <h2>Calories Per Minute</h2>
      <input type="number" placeholder="Enter calories per minute" value={caloriesPerMinute} onChange={handleCaloriesChange} /><br/>
      <button className="clear-btn" onClick={handleClearLog}>Clear Log</button>
      </>
   )
}

export default Work





