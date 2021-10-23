/**
 * https://reacttraining.com/blog/react-context-with-typescript/
 * https://www.youtube.com/watch?v=5LrDIWkK_Bc
 */

import React, { createContext, useState, useEffect, useContext } from "react";

export interface GeneralContextValue {
  isRecording: boolean;
  setIsRecording(event: React.ChangeEvent<HTMLInputElement>): void;
}
const isRecordingContext = createContext(false as boolean);
const setIsRecordingContext = createContext(
  {} as React.Dispatch<React.SetStateAction<boolean>>
);
export function useIsRecording() {
  return useContext(isRecordingContext);
}

export function useSetIsRecording() {
  return useContext(setIsRecordingContext);
}

export default function ContextProvider(props: { children: React.ReactNode }) {
  const [initialIsRecording, setInitialIsRecording] = useState(false);
  const [initialWeight, setInitialWeight] = useState([]);
  const [initialGoals, setInitialGoals] = useState({
      cal: 0,
      dist: 0,
      step: 0,
      weight: 0
  });

  return (
    <goalsContext.Provider value={initialGoals}>
        <setGoalsContext.Provider value={setInitialGoals}>
        <weightContext.Provider value={initialWeight}>
        <setWeightContext.Provider value={setInitialWeight}>
        <isRecordingContext.Provider value={initialIsRecording}>
        <setIsRecordingContext.Provider value={setInitialIsRecording}>
            {props.children}
        </setIsRecordingContext.Provider>
        </isRecordingContext.Provider>
        </setWeightContext.Provider>
        </weightContext.Provider>
        </setGoalsContext.Provider>
    </goalsContext.Provider>
  );
}

// -- 

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