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
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import { dynamicNavigate } from "../functions/navigation";
import Stopwatch from "../components/Stopwatch";
import { useStepsContext } from "../functions/Context";
import { TextStats } from "../components/TextStats";

import "../styles/DefaultScreen.css";

const InWorkoutScreen: React.FC = () => {
  const router = useIonRouter();
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
        <div className="page">
          <IonGrid>
            <IonRow>
              <IonCol>
                <Stopwatch />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="full"
                  onClick={() => {
                    dynamicNavigate("/ResultsScreen", "forward", router);
                  }}
                >
                  <IonLabel>END WORKOUT</IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InWorkoutScreen;
