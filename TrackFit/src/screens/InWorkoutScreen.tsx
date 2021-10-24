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

import "../styles/styles.css";
import { setProgress } from "../data/utilities/Firestore";

/**
 * The workout screen allows the user to start/pause the timer and see the current progress made in their workout
 * Navigates to the results screen when the user has decided to finish
 * @returns the InWorkoutScreen
 */
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
                    setProgress(
                      stepsContext.currentRunningSteps,
                      stepsContext.currentWalkingSteps
                    );
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
