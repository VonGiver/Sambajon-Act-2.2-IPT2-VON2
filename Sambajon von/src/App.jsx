import { useState } from 'react'
import './App.css'
import BurnSummary from './BurnSummary'
import Work from './WorkoutForm'

function App(){
   const [name, setName] = useState('')  
   const [time, setTime] = useState('')  
   const [caloriesPerMinute, setCaloriesPerMinute] = useState('')  

   const handleUpdate = (newName, newTime, newCalories) => {
      setName(newName);
      setTime(newTime);
      setCaloriesPerMinute(newCalories);
   };

   return(
      <>
      <h1 className="page-title">Workout Tracker</h1>
      <h3 className="page-subtitle">Enter workout details to calculate calories burned</h3>
      <div className="forms-container">
        <section className="form-card">
          <Work onUpdate={handleUpdate} />
        </section>

        <section className="form-card">
          <h2 className="summary-heading">Workout Summary</h2>
          <h3>Calories burned details</h3>
          <BurnSummary name={name} time={time} caloriesPerMinute={caloriesPerMinute} />
        </section>
      </div>
      </>
   )
}

export default App