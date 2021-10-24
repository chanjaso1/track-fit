import {
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { dynamicNavigate } from "../functions/navigation";
import { useIonRouter } from "@ionic/react";

import "../styles/styles.css";

/**
 * The results screen shows the final results of the user's workout
 * @returns the results screen
 */
const ResultsScreen: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Results</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="page">
          <IonGrid>
            <IonRow>
              <h1>Workout Results</h1>
            </IonRow>
            <IonRow>
              <IonButton
                onClick={() => {
                  dynamicNavigate("/HomeScreen", "forward", router);
                }}
              >
                <IonLabel>Continue</IonLabel>
              </IonButton>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ResultsScreen;
