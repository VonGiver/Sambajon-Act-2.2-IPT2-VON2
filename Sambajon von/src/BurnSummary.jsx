function BurnSummary ({ name, time, caloriesPerMinute }) {
   const totalCaloriesBurned = time && caloriesPerMinute ? time * caloriesPerMinute : 0;

   return(
      <>
      <h2>Exercise Name: {name}</h2>
      <h2>Duration (Minutes): {time}</h2>
      <h2>Calories Per Minute: {caloriesPerMinute}</h2>
         <h2 className="total-burn">Total Burn: {totalCaloriesBurned}</h2>
      </>
   )
}

export default BurnSummary