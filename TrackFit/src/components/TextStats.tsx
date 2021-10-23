import { IonRow, IonText } from "@ionic/react";
import { useEffect, useState } from "react";
import { useStepsContext } from "../functions/Context";

//props: { children: React.ReactNode }
export const TextStats = () => {
  const stepsContext = useStepsContext();
  const [steps, setSteps] = useState("Steps: " + stepsContext.currentSteps);
  const [distance, setDistance] = useState(
    "Distance Travelled: " + stepsContext.currentSteps * 0.74
  );
  const [caloriesBurned, setCaloriesBurned] = useState(
    "Calories Burned: " +
      (stepsContext.currentSteps % 16.9 > 0
        ? stepsContext.currentSteps % 16.9
        : 0)
  );

  /**
   * On a step, update the steps taken, the distance travelled and the calories burned.
   */
  useEffect(() => {
    setSteps("Steps: " + stepsContext.currentSteps);
    setDistance(
      "Distance Travelled: " +
        Math.floor(stepsContext.currentSteps * 0.74) +
        "m"
    );

    setCaloriesBurned(
      "Calories Burned: " +
        Math.floor(stepsContext.currentSteps / 16.9) +
        "kcal"
    );
  }, [stepsContext.currentSteps]);
  //16.9 steps to burn one calorie when walking at 4.83 kph
  //16.9/2 steps to burn one calorie when running at 4.83 * 2 kph

  return (
    <>
      <IonRow>
        <IonText>{steps}</IonText>
      </IonRow>
      <IonRow>
        <IonText>{distance}</IonText>
      </IonRow>
      <IonRow>
        <IonText>{caloriesBurned}</IonText>
      </IonRow>
    </>
  );
};
