/**
 * DeviceMotion handles the Accelerometer and calculates the steps, distance and calories burned during the workout.
 *
 * Reference: https://ionicframework.com/docs/native/device-motion
 */

import {
  DeviceMotion,
  DeviceMotionAccelerationData,
  DeviceMotionAccelerometerOptions,
} from "@ionic-native/device-motion";
import { isRecordingInterface, stepsContextInterface } from "./Context";

/**
 * Start to record the accelerometer and check if steps are taken.
 * @param stepsContext
 * @returns the subscription of the accelerometer
 */
export const startCount = (
  stepsContext: stepsContextInterface,
  stillRecording: isRecordingInterface
) => {
  var options: DeviceMotionAccelerometerOptions = { frequency: 20 };

  var subscription = DeviceMotion.watchAcceleration(options).subscribe(
    (acceleration: DeviceMotionAccelerationData) => {
      if (stepsContext.firstStep == -99) {
        stepsContext.firstStep = acceleration.x;
      } else if (stepsContext.secondStep == -99) {
      }

      if (isStep(stepsContext)) {
        //Make a new step if it is a step
        if (stepsContext.exerciseType == "walking") {
          stepsContext.currentWalkingSteps =
            stepsContext.currentWalkingSteps + 1;
        } else if (stepsContext.exerciseType == "running") {
          stepsContext.currentRunningSteps =
            stepsContext.currentRunningSteps + 1;
        }

        stepsContext.currentSteps = stepsContext.currentSteps + 1;
        stepsContext.latestWorkoutSteps = stepsContext.latestWorkoutSteps + 1;
      }
      stepsContext.firstStep = stepsContext.secondStep;
      stepsContext.secondStep = acceleration.x;

      //unsubscribe if the user has stopped their workout
      if (!stillRecording.isRecording && subscription) {
        subscription.unsubscribe();
      }
    }
  );
};

/**
 * Check that the device motion counts as a step
 * @param stepsContext
 * @returns true if it is a step
 */
const isStep = (stepsContext: stepsContextInterface) => {
  //check that the first and second step is in the opposite direction.
  if (
    (stepsContext.secondStep < 0 && stepsContext.firstStep > 0) ||
    (stepsContext.secondStep > 0 && stepsContext.firstStep < 0)
  ) {
    return true; //count as a step
  }
  return false;
};

/**
 * Get the distance of the workout
 * @param stepsContext
 * @returns
 */
export const getDistance = (stepsContext: stepsContextInterface) => {
  if (stepsContext.exerciseType == "walking") {
    return Math.floor(stepsContext.latestWorkoutSteps * 0.74);
  } else {
    return Math.floor(stepsContext.latestWorkoutSteps * 1.651);
  }
};

/**
 * Get the calories burned from the workout
 * @param stepsContext
 * @returns
 */
export const getCaloriesBurned = (stepsContext: stepsContextInterface) => {
  if (stepsContext.exerciseType == "walking") {
    return Math.floor(stepsContext.latestWorkoutSteps / 16.9);
  } else {
    return Math.floor(stepsContext.latestWorkoutSteps / 8.45);
  }
};
