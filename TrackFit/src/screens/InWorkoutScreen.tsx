import {
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { useIonRouter } from "@ionic/react";
import { dynamicNavigate } from "../functions/navigation";
import { startCount, stopCount } from "../functions/DeviceMotion";
import { useSetIsRecording, useIsRecording } from "../functions/Context";
import { Subscription } from "rxjs";
import Stopwatch from "../components/Stopwatch";
import Dropdown from "../components/Dropdown";

const InWorkoutScreen: React.FC = () => {
  const router = useIonRouter();
  var subscription: Subscription;
  const isRecording = useIsRecording();
  const setIsRecording = useSetIsRecording();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
            <IonTitle>In Workout</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <Stopwatch />
        <Dropdown />
        <IonButton
          onClick={() => {
            dynamicNavigate("/ResultsScreen", "forward", router);
          }}
        >
          <IonLabel>End</IonLabel>
        </IonButton>

        <IonButton
          onClick={() => {
            // subscription = startCount();
            // console.log(subscription);

            setIsRecording(!isRecording);
            console.log(isRecording);
          }}
          disabled={isRecording}
        >
          <IonLabel>Start</IonLabel>
        </IonButton>

        <IonButton
          onClick={() => {
            // stopCount(subscription);
            setIsRecording(!isRecording);
            console.log(isRecording);
          }}
          disabled={!isRecording}
        >
          <IonLabel>Stop</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default InWorkoutScreen;
