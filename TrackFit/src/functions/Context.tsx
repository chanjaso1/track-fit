/**
 * Context follows Flux architecture and creates a store for variables to be acessed globally.
 * This allows variables to be accessed from any level within the app.
 *
 * References:
 * https://reacttraining.com/blog/react-context-with-typescript/
 * https://www.youtube.com/watch?v=5LrDIWkK_Bc
 */

import React, { createContext, useState, useContext } from "react";

/**
 * Variables related to In Workout statistics.
 */
export interface stepsContextInterface {
  currentSteps: number;
  latestWorkoutSteps: number;
  currentWalkingSteps: number;
  currentRunningSteps: number;
  firstStep: number;
  secondStep: number;
  exerciseType: string;
}

/**
 * Variables related to the Timer component.
 */
export interface timerContextInterface {
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Provides a global context to check if the accelerometer is recording.
 */
export interface isRecordingInterface {
  isRecording: boolean;
}

/**
 * Variables related to the workout goals in the Set Workout screen.
 */
export interface workoutContextInterface {
  workoutDistance: number;
  workoutSteps: number;
}

const isRecordingContext = createContext({} as isRecordingInterface);
const stepsContext = createContext({} as stepsContextInterface);
const timerContext = createContext({} as timerContextInterface);
const workoutContext = createContext({} as workoutContextInterface);

/**
 * @returns the isRecordingContext
 */
export function useIsRecording() {
  return useContext(isRecordingContext);
}
/**
 * @returns the stepsContext
 */
export function useStepsContext() {
  return useContext(stepsContext);
}

/**
 * @returns the timerContext
 */
export function useTimerContext() {
  return useContext(timerContext);
}

/*
 * @returns the workoutContext
 */
export function useWorkoutContext() {
  return useContext(workoutContext);
}

/**
 * Resets fields inside the stepsContext and timerContext
 * @param stepsContext
 * @param timerContext
 */
export function resetData(
  stepsContext: stepsContextInterface,
  timerContext: timerContextInterface
) {
  stepsContext.latestWorkoutSteps = 0;
  timerContext.hours = 0;
  timerContext.minutes = 0;
  timerContext.seconds = 0;
}
const stepObject: any = {
  currentSteps: 0,
  latestWorkoutSteps: 0,
  currentWalkingSteps: 0,
  currentRunningSteps: 0,
  firstStep: -99,
  secondStep: -99,
  exerciseType: "",
};

const workoutObject: workoutContextInterface = {
  workoutDistance: 0,
  workoutSteps: 0,
};

const isRecordingObject: any = {
  isRecording: false,
};

const timerObject: timerContextInterface = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

/**
 * Provides context for the app.
 * @param props -- The app
 * @returns all contexts as global states for the app
 */
export default function ContextProvider(props: { children: React.ReactNode }) {
  const [initialWeight, setInitialWeight] = useState([]);
  const [initialGoals, setInitialGoals] = useState({
    cal: 0,
    dist: 0,
    step: 0,
    weight: 0,
  });

  return (
    <goalsContext.Provider value={initialGoals}>
      <setGoalsContext.Provider value={setInitialGoals}>
        <weightContext.Provider value={initialWeight}>
          <setWeightContext.Provider value={setInitialWeight}>
            <isRecordingContext.Provider value={isRecordingObject}>
              <stepsContext.Provider value={stepObject}>
                <timerContext.Provider value={timerObject}>
                  <workoutContext.Provider value={workoutObject}>
                    {props.children}
                  </workoutContext.Provider>
                </timerContext.Provider>
              </stepsContext.Provider>
            </isRecordingContext.Provider>
          </setWeightContext.Provider>
        </weightContext.Provider>
      </setGoalsContext.Provider>
    </goalsContext.Provider>
  );
}

const weightContext = createContext([] as any);
const setWeightContext = createContext(
  {} as React.Dispatch<React.SetStateAction<any>>
);
/**
 * @returns the weightContext
 */
export function useWeightContext() {
  return useContext(weightContext);
}
/**
 * @returns the setWeightContext
 */
export function useSetWeightContext() {
  return useContext(setWeightContext);
}

const goalsContext = createContext({} as any);
const setGoalsContext = createContext(
  {} as React.Dispatch<React.SetStateAction<any>>
);

/**
 * @returns the goalsContext
 */
export function useGoalsContext() {
  return useContext(goalsContext);
}

/**
 * @returns the setGoalContext
 */
export function useSetGoalsContext() {
  return useContext(setGoalsContext);
}
