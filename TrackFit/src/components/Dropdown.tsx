/**
 * The Dropdown component is located on the Set Workout screen and displays the list of activities
 * the user can set for their workout.
 *
 * Reference:
 * https://ionicframework.com/docs/v3/api/components/select/Select/
 */
import { useState } from "react";
import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { useStepsContext } from "../functions/Context";

const Dropdown = () => {
  const [activity, setActivity] = useState();
  const stepsContext = useStepsContext();

  return (
    <IonItem>
      <IonLabel>Activity</IonLabel>
      <IonSelect
        value={activity}
        placeholder="Select activity"
        onIonChange={(e) => {
          setActivity(e.detail.value);
          stepsContext.exerciseType = e.detail.value;
        }}
      >
        <IonSelectOption value="walking">Walking</IonSelectOption>
        <IonSelectOption value="running">Running</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};

export default Dropdown;
