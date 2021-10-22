/**
 * The Stopwatch component keeps track of the time the user has spent working out.
 *
 * References:
 * https://forum.ionicframework.com/t/making-buttons-side-by-side/162278/7
 */
import React, { useState } from "react";
import { IonButton, IonGrid, IonLabel, IonRow, IonCol } from "@ionic/react";

const Stopwatch: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonButton
            expand="full"
            onClick={() => {
              console.log("start");
            }}
          >
            <IonLabel>START</IonLabel>
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton
            expand="full"
            onClick={() => {
              console.log("stop");
            }}
          >
            <IonLabel>STOP</IonLabel>
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Stopwatch;
