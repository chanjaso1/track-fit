/**
 * The Stopwatch component is located on the In Workout screen and keeps track of the time the user has spent working out.
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
import { Subscription } from "rxjs";
import { useIsRecording, useStepsContext } from "../functions/Context";
import { startCount } from "../functions/DeviceMotion";
import { TextStats } from "./TextStats";

const Stopwatch: React.FC = () => {
  const [hours, setHour] = useState(0);
  const [minutes, setMinute] = useState(0);
  const [seconds, setSecond] = useState(0);
  const [time, setTime] = useState("00:00:00");
  const [timerRunning, setTimerRunning] = useState(false);
  const isRecordingContext = useIsRecording();
  const stepsContext = useStepsContext();

  useEffect(() => {
    countUp();
  });

  /**
   * Increments the timer in one second intervals.
   * If 60 seconds is reached, increment minutes by 1 and reset seconds to 0. Otherwise, continue incrementing seconds.
   * If 60 minutes is reached, increment hours by 1 and reset minutes to 0. Otherwise, continue incrementing minutes.
   */
  function countUp() {
    if (!timerRunning) return; // stops timer counting up

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

      // format the time
      setTime(formatTime());
      return time;
    }, 1000);
  }

  /**
   * Format time to be in HH:MM:SS.
   * Reference: https://demo.mobiscroll.com/react/timer/stopwatch
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

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonText>{time}</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <TextStats />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton
            expand="full"
            onClick={() => {
              setTimerRunning(true);
              stepsContext.latestWorkoutSteps = 0;
              startCount(stepsContext, isRecordingContext);
              isRecordingContext.isRecording = true;
            }}
            disabled={isRecordingContext.isRecording}
          >
            <IonLabel>START</IonLabel>
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton
            expand="full"
            onClick={() => {
              setTimerRunning(false);
              // stopCount(subscription);
              // subscriptions = disposeSubscriptions(subscriptions);
              isRecordingContext.isRecording = false;
              // console.log(isRecording);
            }}
            disabled={!isRecordingContext.isRecording}
          >
            <IonLabel>STOP</IonLabel>
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Stopwatch;
