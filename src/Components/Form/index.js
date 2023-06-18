import React, { useState } from "react";
import "./styles.css";

const Form = () => {
  const [calories, setCalories] = useState(1200);
  const [editCalories, setEditCalories] = useState(false);
  const [caloriesUsed, setCaloriesUsed] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCalories(event.target.calories.value);
    setEditCalories(false);
  }

  const handleSubmitDiary = (event) => {
    event.preventDefault();
    const calorieBreakfast = event.target.caloriebreakfast.value;
    const calorieLunch = event.target.calorieLunch.value;
    const calorieDinner = event.target.calorieDinner.value;
    const calorieSnack = event.target.calorieSnack.value;
    const totalCalories = parseInt(calorieBreakfast) + parseInt(calorieLunch) + parseInt(calorieDinner) + parseInt(calorieSnack);
    setCaloriesUsed(totalCalories);
  }
  return (
    <div>
      <div className="form-title-wrapper">
        <h1>Set your maximum calorie limit here!</h1>
        <h2>Answer the following questions in order to have your food information</h2>
      </div>


      <div className="container second-container">
          <div className="dairy-calories">
            <p>You can consume <span className="calories">{calories}</span> calories per day</p>
            {!editCalories && 
              <button className="btn-form" onClick={() => setEditCalories(true)}>Edit</button>
            }
          </div>
        <div className="calories-pannel">
          <h4 className="calories-used">{calories - caloriesUsed} <br /> Remaining</h4>
        </div>
        <p className="form-paragraph">How many calories you consumed in:</p>
        <div>
          <form onSubmit={handleSubmit}>
            {editCalories && (
              <>
                <label for="calories">Set your maximum calories</label>
                <input type="number" id="calories" name="calories" ></input>
                <button className="btn-form">Save</button>
              </>
            )}
          </form>
          <form onSubmit={handleSubmitDiary}>
            {!editCalories && (
              <>
                <label for="breakfast">Breakfast</label>
                <input type="number" id="breakfast" name="caloriebreakfast" />

                <label for="lunch">Lunch</label>
                <input type="number" id="lunch" name="calorieLunch" />

                <label for="dinner">Dinner</label>
                <input type="number" id="dinner" name="calorieDinner" />

                <label for="snack">Snack</label>
                <input type="number" id="snack" name="calorieSnack" />

                <button className="btn-form" type="submit">Submit</button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
