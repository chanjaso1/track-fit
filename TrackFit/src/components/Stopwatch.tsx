/**
 * The Stopwatch component keeps track of the time the user has spent working out.
 *
 * References:
 * https://forum.ionicframework.com/t/making-buttons-side-by-side/162278/7
 * https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
 */
import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonGrid,
  IonLabel,
  IonRow,
  IonCol,
  IonText,
  IonDatetime,
} from "@ionic/react";

const Stopwatch: React.FC = () => {
  let start: number = 0;
  let hours: number = 12;
  let minutes: number = 15;
  let seconds: number = 10;
  /**
   * Start the Stopwatch.
   */
  const startStopwatch = () => {};

  /**
   * Stop the Stopwatch.
   */
  const stopStopwatch = () => {};

  /**
   * Reset the Stopwatch to zero.
   */
  const resetStopwatch = () => {};

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          {/* <IonText>{hours + ":" + minutes + ":" + seconds}</IonText> */}
          <IonDatetime
            value={hours + ":" + minutes + ":" + seconds}
            displayFormat="HH:mm:ss"
          ></IonDatetime>
        </IonCol>
      </IonRow>
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
