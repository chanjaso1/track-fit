import {
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { dynamicNavigate } from "../functions/navigation";
import { useIonRouter } from "@ionic/react";
import Stopwatch from "../components/Stopwatch";

const SetWorkoutScreen: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Set Workout Screen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Tab 2 page" />
        <Stopwatch />
        <IonButton
          onClick={() => {
            dynamicNavigate("/InWorkoutScreen", "forward", router);
          }}
        >
          <IonLabel>Start</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SetWorkoutScreen;
