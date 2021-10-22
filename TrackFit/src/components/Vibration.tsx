/**
 * The Vibration component is enabled when the app notifies a user they have reached their goal.
 * The device vibrates as well as displays an Alert message.
 *
 * References:
 * https://ionicframework.com/docs/native/vibration
 * https://www.youtube.com/watch?v=O9EyIauV2Sw
 */
import { Vibration } from "@ionic-native/vibration/ngx";
import React from "react";

class ActivateVibration {
  constructor(private vibration: Vibration) {}

  /**
   * Vibrates the device for a specific amount of time.
   */
  vibrate() {
    // Vibrate the device for a second
    // Duration is ignored on iOS.
    this.vibration.vibrate(1000);
    console.log("vibrate");

    // Vibrate 2 seconds
    // Pause for 1 second
    // Vibrate for 2 seconds
    // Patterns work on Android and Windows only
    // this.vibration.vibrate([2000, 1000, 2000]);

    // Stop any current vibrations immediately
    // Works on Android and Windows only
    this.vibration.vibrate(0);
  }

  /**
   * Immediately stosp the vibration of the device.
   */
  stopVibrate() {
    this.vibration.vibrate(0);
  }
}
export default ActivateVibration;
