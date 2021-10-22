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

  return (
    <isRecordingContext.Provider value={initialIsRecording}>
      <setIsRecordingContext.Provider value={setInitialIsRecording}>
        {props.children}
      </setIsRecordingContext.Provider>
    </isRecordingContext.Provider>
  );
}
