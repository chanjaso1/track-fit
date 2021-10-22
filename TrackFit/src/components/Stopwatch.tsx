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
} from "@ionic/react";

const Stopwatch: React.FC = () => {
  const [hours, setHour] = useState(2);
  const [minutes, setMinute] = useState(59);
  const [seconds, setSecond] = useState(55);
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    countUp();
  });

  /**
   * Increments the timer in one second intervals.
   * If 60 seconds is reached, increment minute by 1. Otherwise, continue incrementing seconds.
   * If 60 minutes is reached, increment hours by 1. Otherwise, continue incrementing minutes.
   */
  function countUp() {
    setTimeout(() => {
      // if full second, increment minute
      if (seconds >= 59) {
        setSecond(0);
        setMinute(minutes + 1);

        // if full minute, increment hour
        if (minutes >= 59) {
          setMinute(0);
          setHour(hours + 1);
        } else {
          setMinute(minutes + 1);
        }
      } else {
        setSecond(seconds + 1);
      }

      // increment second
      // setSecond(seconds >= 59 ? 0 : seconds + 1);

      // // increment minute
      // if (minutes >= 59) setMinute(0);
      // else setMinute(seconds >= 59 ? minutes + 1 : minutes);

      // // increment hour
      // setHour(minutes >= 59 ? hours + 1 : hours);
      setTime(formatTime());

      console.log("time: " + time);
      return time;
    }, 1000);
  }

  /**
   * Format time to be HH:MM:SS.
   */
  function formatTime() {
    return (
      (hours < 10 ? "0" : "") +
      hours +
      ":" +
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds
    );
  }

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
          <IonText>{time}</IonText>
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
