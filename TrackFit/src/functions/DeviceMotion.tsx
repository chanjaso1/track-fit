/**
 * https://ionicframework.com/docs/native/device-motion
 */

import {
  DeviceMotion,
  DeviceMotionAccelerationData,
  DeviceMotionAccelerometerOptions,
} from "@ionic-native/device-motion";
import { Subscription } from "rxjs";

// DeviceMotion.getCurrentAcceleration().then(
//   (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
//   (error: any) => console.log(error)
// );

export const startCount = () => {
  // Watch device acceleration
  //  subscription: any;
  var options: DeviceMotionAccelerometerOptions = { frequency: 100 };

  var subscription = DeviceMotion.watchAcceleration(options).subscribe(
    (acceleration: DeviceMotionAccelerationData) => {
      console.log(acceleration);
    }
  );
  return subscription;
};

// Stop watch
export const stopCount = (subscription: Subscription) => {
  subscription.unsubscribe();
  console.log("Stopped");
};
