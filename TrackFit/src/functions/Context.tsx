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
  firstStep: number;
  secondStep: number;
}

export interface isRecordingInterface {
  isRecording: boolean;
}
const isRecordingContext = createContext({} as isRecordingInterface);

const stepsContext = createContext({} as stepsContextInterface);
export function useIsRecording() {
  return useContext(isRecordingContext);
}

export function useStepsContext() {
  return useContext(stepsContext);
}

export default function ContextProvider(props: { children: React.ReactNode }) {
  // const [initialIsRecording, setInitialIsRecording] = useState(false);
  const [initialWeight, setInitialWeight] = useState([]);

  const stepObject: any = {
    currentSteps: 0,
    firstStep: -99,
    secondStep: -99,
  };

  const isRecordingObject: any = {
    isRecording: false,
  };

  return (
    <weightContext.Provider value={initialWeight}>
      <setWeightContext.Provider value={setInitialWeight}>
        <isRecordingContext.Provider value={isRecordingObject}>
          <stepsContext.Provider value={stepObject}>
            {props.children}
          </stepsContext.Provider>
        </isRecordingContext.Provider>
      </setWeightContext.Provider>
    </weightContext.Provider>
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
