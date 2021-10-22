/**
 * The Dropdown component is located on the Set Workout screen and displays the list of activities
 * the user can set for their workout.
 *
 * Reference:
 * https://ionicframework.com/docs/v3/api/components/select/Select/
 */
import React, { useState } from "react";
import {
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

const Dropdown = () => {
  const [activity, setActivity] = useState();

  return (
    <IonList>
      <IonItem>
        <IonLabel>Activity</IonLabel>
        <IonSelect
          value={activity}
          placeholder="Select an activity"
          onIonChange={(e) => setActivity(e.detail.value)}
        >
          <IonSelectOption value="walking">Walking</IonSelectOption>
          <IonSelectOption value="running">Running</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
};

export default Dropdown;
