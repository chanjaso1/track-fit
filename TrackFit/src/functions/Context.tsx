/**
 * https://reacttraining.com/blog/react-context-with-typescript/
 * https://www.youtube.com/watch?v=5LrDIWkK_Bc
 */

import React, { createContext, useState, useContext } from "react";

export interface GeneralContextValue {
  isRecording: boolean;
  setIsRecording(event: React.ChangeEvent<HTMLInputElement>): void;
}

export interface stepsContextInterface {
  currentSteps: number;
  latestWorkoutSteps: number;
  firstStep: number;
  secondStep: number;
  exerciseType: string;
}

export interface timerContextInterface {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface isRecordingInterface {
  isRecording: boolean;
}
const isRecordingContext = createContext({} as isRecordingInterface);
const stepsContext = createContext({} as stepsContextInterface);
const timerContext = createContext({} as timerContextInterface);

export function useIsRecording() {
  return useContext(isRecordingContext);
}

export function useStepsContext() {
  return useContext(stepsContext);
}

export function useTimerContext() {
  return useContext(timerContext);
}

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
  firstStep: -99,
  secondStep: -99,
  exerciseType: "",
};

const isRecordingObject: any = {
  isRecording: false,
};

const timerObject: timerContextInterface = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

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
                  {props.children}
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
export function useWeightContext() {
  return useContext(weightContext);
}
export function useSetWeightContext() {
  return useContext(setWeightContext);
}

// --

const goalsContext = createContext({} as any);
const setGoalsContext = createContext(
  {} as React.Dispatch<React.SetStateAction<any>>
);
export function useGoalsContext() {
  return useContext(goalsContext);
}
export function useSetGoalsContext() {
  return useContext(setGoalsContext);
}
