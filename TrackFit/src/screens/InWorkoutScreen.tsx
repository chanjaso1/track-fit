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
import { startCount } from "../functions/DeviceMotion";
import {
  useSetIsRecording,
  useIsRecording,
  useStepsContext,
} from "../functions/Context";
import { Subscription } from "rxjs";

const InWorkoutScreen: React.FC = () => {
  const router = useIonRouter();
  var subscription: Subscription;
  const isRecording = useIsRecording();
  const setIsRecording = useSetIsRecording();
  const stepsContext = useStepsContext();

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
        <IonButton
          onClick={() => {
            dynamicNavigate("/ResultsScreen", "forward", router);
          }}
        >
          <IonLabel>End</IonLabel>
        </IonButton>

        <IonButton
          onClick={() => {
            subscription = startCount(stepsContext);

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
