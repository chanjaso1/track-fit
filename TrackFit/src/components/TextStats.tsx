import { IonRow } from "@ionic/react";
import { useEffect, useState } from "react";
import { getUserName } from "../data/utilities/Firestore";
import { useStepsContext, useWorkoutContext } from "../functions/Context";
import { getCaloriesBurned, getDistance } from "../functions/DeviceMotion";
import "../styles/styles.css";

export const TextStats = () => {
  const stepsContext = useStepsContext();
  const workoutContext = useWorkoutContext();
  const [steps, setSteps] = useState(
    "Steps: " + stepsContext.latestWorkoutSteps
  );
  const [distance, setDistance] = useState(
    "Distance Travelled: " + getDistance(stepsContext)
  );
  const [caloriesBurned, setCaloriesBurned] = useState(
    "Calories Burned: " + getCaloriesBurned(stepsContext)
  );

  /**
   * On a step, update the steps taken, the distance travelled and the calories burned.
   */
  useEffect(() => {
    setSteps("Steps: " + stepsContext.latestWorkoutSteps);

    setDistance("Distance Travelled: " + getDistance(stepsContext) + "m");

    setCaloriesBurned(
      "Calories Burned: " +
        getCaloriesBurned(stepsContext) +
        // Math.floor(stepsContext.latestWorkoutSteps / 16.9) +
        "kcal"
    );
    //average distance for men and women per running step is 1.651m
    //https://livehealthy.chron.com/average-inches-per-stride-running-8064.html#:~:text=When%20exercise%20physiologist%20Jack%20Daniels,and%2093%20inches%20for%20sprinters.

    if (stepsContext.latestWorkoutSteps == 10) {
      var userName: any = "";
      getUserName().then(function (name) {
        userName = name;
        alert(
          `Congratulations ${userName}, you reached 10 steps! Keep exercising to reach your goal!`
        );
      });
    } else if (
      stepsContext.latestWorkoutSteps == workoutContext.workoutSteps / 2 &&
      workoutContext.workoutSteps > 0
    ) {
      var userName: any = "";
      getUserName().then(function (name) {
        userName = name;
        alert(`Congratulations ${userName}, you reached halfway steps!`);
      });
    }
  }, [stepsContext.currentSteps, stepsContext.latestWorkoutSteps]);
  //16.9 steps to burn one calorie when walking at 4.83 kph
  //16.9/2 steps to burn one calorie when running at 4.83 * 2 kph

  return (
    <div className="workoutStats">
      <IonRow>
        <p>Activity: You are {stepsContext.exerciseType}</p>
      </IonRow>
      <IonRow>
        <p>{steps}</p>
      </IonRow>
      <IonRow>
        <p>{distance}</p>
      </IonRow>
      <IonRow>
        <p>{caloriesBurned}</p>
      </IonRow>
    </div>
  );
};
