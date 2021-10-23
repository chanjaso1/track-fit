/**
 * https://ionicframework.com/docs/native/device-motion
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
  var options: DeviceMotionAccelerometerOptions = { frequency: 10 };

  var subscription = DeviceMotion.watchAcceleration(options).subscribe(
    (acceleration: DeviceMotionAccelerationData) => {
      // console.log(acceleration);
      if (stepsContext.firstStep == -99) {
        stepsContext.firstStep = acceleration.x;
      } else if (stepsContext.secondStep == -99) {
      }

      if (isStep(stepsContext)) {
        //Make a new step if it is a step
        stepsContext.currentSteps = stepsContext.currentSteps + 1;
        stepsContext.latestWorkoutSteps = stepsContext.latestWorkoutSteps + 1;
        console.log("new steps!!: " + stepsContext.latestWorkoutSteps);
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
export const isStep = (stepsContext: stepsContextInterface) => {
  //check that the first and second step is in the opposite direction.
  if (
    (stepsContext.secondStep < 0 && stepsContext.firstStep > 0) ||
    (stepsContext.secondStep > 0 && stepsContext.firstStep < 0)
  ) {
    return true; //count as a step
  }
  return false;
};
