/**
 * The Set Goal screen allows the user to set their daily goals.
 * This includes their daily calorie, distance and steps goal. 
 * A Weight goal is also included which is a long-term goal the user can achieve.
 */
import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonInput,
  IonList,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useState } from "react";
import { updateDailyGoals } from "../data/utilities/Firestore";
import { useGoalsContext, useSetGoalsContext } from "../functions/Context";

import "../styles/styles.css";

const SetGoalScreen: React.FC = () => {
  const [calorie, setCalorie] = useState<number>();
  const [distance, setDistance] = useState<number>();
  const [steps, setSteps] = useState<number>();
  const [goalWeight, setGoalWeight] = useState<number>();
  const goals = useGoalsContext();
  const setGoals = useSetGoalsContext();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
            <IonTitle>Set Goals</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="page">
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1>Today's Goals</h1>
                <p>Set your goals for today!</p>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonList>
                  <IonItem>
                    <IonLabel>Set Daily Calorie Goal: </IonLabel>
                    <IonInput
                      type="number"
                      value={calorie}
                      placeholder="eg. 2000"
                      onIonChange={(e) =>
                        setCalorie(parseInt(e.detail.value!, 10))
                      }
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Set Daily Distance Goal (m): </IonLabel>
                    <IonInput
                      type="number"
                      value={distance}
                      placeholder="eg. 5000"
                      onIonChange={(e) =>
                        setDistance(parseInt(e.detail.value!, 10))
                      }
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Set Daily Steps Goal: </IonLabel>
                    <IonInput
                      type="number"
                      value={steps}
                      placeholder="eg. 6000"
                      onIonChange={(e) =>
                        setSteps(parseInt(e.detail.value!, 10))
                      }
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Set Weight Goal (kg): </IonLabel>
                    <IonInput
                      type="number"
                      value={goalWeight}
                      placeholder="eg. 70"
                      onIonChange={(e) =>
                        setGoalWeight(parseInt(e.detail.value!, 10))
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
                  onClick={() => {
                    if (
                      calorie == null ||
                      distance == null ||
                      steps == null ||
                      calorie == null
                    ) {
                      alert("Please input values for all goals!");
                    } else {
                      var out = {
                        cal: calorie,
                        dist: distance,
                        step: steps,
                        weight: goalWeight,
                      };
                      setGoals(out);
                      updateDailyGoals(out.cal, out.dist, out.step, out.weight);
                      alert("Successfully saved your goals!");
                    }
                  }}
                >
                  <IonLabel>Update Goals</IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SetGoalScreen;
