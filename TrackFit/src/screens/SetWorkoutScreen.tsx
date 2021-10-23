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
  IonList,
  IonItem,
  IonInput,
} from "@ionic/react";
import { dynamicNavigate } from "../functions/navigation";
import { useIonRouter } from "@ionic/react";
import { useState } from "react";
import Dropdown from "../components/Dropdown";

import "../styles/styles.css";

const SetWorkoutScreen: React.FC = () => {
  const router = useIonRouter();

  const [targetDistance, setTargetDistance] = useState<number>(NaN);
  const [targetSteps, setTargetSteps] = useState<number>(NaN);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Set Workout Screen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="page">
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1>Workout Goals</h1>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <p>Choose your workout activity:</p>
                <Dropdown />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonList>
                  <p>Set your targets for this workout:</p>
                  <IonItem>
                    <IonLabel>Enter Target Distance:</IonLabel>
                    <IonInput
                      type="number"
                      value={targetDistance}
                      placeholder="eg. 1k"
                      onIonChange={(e) =>
                        setTargetDistance(parseInt(e.detail.value!, 10))
                      }
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Enter Target Steps:</IonLabel>
                    <IonInput
                      type="number"
                      value={targetSteps}
                      placeholder="eg. 500 steps"
                      onIonChange={(e) =>
                        setTargetSteps(parseInt(e.detail.value!, 10))
                      }
                    ></IonInput>
                  </IonItem>
                </IonList>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="full"
                  onClick={() =>
                    dynamicNavigate("/InWorkoutScreen", "forward", router)
                  }
                >
                  <IonLabel>Begin Workout</IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SetWorkoutScreen;
