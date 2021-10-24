import { IonRow } from "@ionic/react";
import { useEffect, useState } from "react";
import { AnyCatcher } from "rxjs/internal/AnyCatcher";
import { getUserName } from "../data/utilities/Firestore";
import { useStepsContext } from "../functions/Context";

import "../styles/styles.css";

//props: { children: React.ReactNode }
export const TextStats = () => {
  const stepsContext = useStepsContext();
  const [totalSteps, setTotalSteps] = useState("Total Steps: 0");
  const [steps, setSteps] = useState(
    "Steps: " + stepsContext.latestWorkoutSteps
  );
  const [distance, setDistance] = useState(
    "Distance Travelled: " + stepsContext.latestWorkoutSteps * 0.74
  );
  const [caloriesBurned, setCaloriesBurned] = useState(
    "Calories Burned: " +
      (stepsContext.latestWorkoutSteps % 16.9 > 0
        ? stepsContext.latestWorkoutSteps % 16.9
        : 0)
  );

  /**
   * On a step, update the steps taken, the distance travelled and the calories burned.
   */
  useEffect(() => {
    setTotalSteps("Total Steps: " + stepsContext.currentSteps);
    setSteps("Steps: " + stepsContext.latestWorkoutSteps);
    setDistance(
      "Distance Travelled: " +
        Math.floor(stepsContext.latestWorkoutSteps * 0.74) +
        "m"
    );

    setCaloriesBurned(
      "Calories Burned: " +
        Math.floor(stepsContext.latestWorkoutSteps / 16.9) +
        "kcal"
    );

    // actionable insight - motivates user to continue reaching their goal after 10 steps is reached
    if (stepsContext.latestWorkoutSteps == 10) {
      var userName: any = "";
      getUserName().then(function (name) {
        userName = name;
        alert(
          `Congratulations ${userName}, you reached 10 steps! Keep exercising to reach your goal!`
        );
      });
    }
  }, [stepsContext.currentSteps]);
  //16.9 steps to burn one calorie when walking at 4.83 kph
  //16.9/2 steps to burn one calorie when running at 4.83 * 2 kph

  return (
    <div className="workoutStats">
      <IonRow>
        <p>{totalSteps}</p>
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
