/**
 * The Stopwatch component is located on the In Workout screen and keeps track of the time the user has spent working out.
 *
 * References:
 * https://forum.ionicframework.com/t/making-buttons-side-by-side/162278/7
 * https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
 */
import React, { useEffect, useState } from "react";
import { IonButton, IonGrid, IonLabel, IonRow, IonCol } from "@ionic/react";
import {
  useIsRecording,
  useStepsContext,
  useTimerContext,
} from "../functions/Context";
import { startCount } from "../functions/DeviceMotion";
import { TextStats } from "./TextStats";

import "../styles/styles.css";

/**
 *
 * @returns the stop watch, start/pause buttons, and textstats
 */
const Stopwatch: React.FC = () => {
  const timerContext = useTimerContext();
  let hours = timerContext.hours;
  let minutes = timerContext.minutes;
  let seconds = timerContext.seconds;
  const [time, setTime] = useState("00:00:00");
  const [timerRunning, setTimerRunning] = useState(false);
  const isRecordingContext = useIsRecording();
  const stepsContext = useStepsContext();

  useEffect(() => {
    setTime(formatTime());
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
        seconds = 0;
        minutes = minutes + 1;

        // if full minute, increment hour
        if (minutes >= 59) {
          minutes = 0;
          hours = hours + 1;
        } else {
          minutes = minutes + 1;
        }
      } else {
        seconds = seconds + 1;
      }

      // format the time
      timerContext.hours = hours;
      timerContext.minutes = minutes;
      timerContext.seconds = seconds;
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
          <div className="timer">
            <h1>{time}</h1>
          </div>
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
              isRecordingContext.isRecording = false;
            }}
            disabled={!isRecordingContext.isRecording}
          >
            <IonLabel>PAUSE</IonLabel>
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <TextStats />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Stopwatch;
