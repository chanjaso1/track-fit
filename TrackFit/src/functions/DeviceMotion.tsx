import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

var subscription : any;

DeviceMotion.getCurrentAcceleration().then(
  (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
  (error: any) => console.log(error)
);

export const startCount = () => {
// Watch device acceleration
subscription = DeviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
    console.log(acceleration);
  });
}


// Stop watch

export const stopCount = () => {
    subscription.unsubscribe();
    console.log("Stopped");
}

