import { useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import { writeWeight } from "../data/utilities/Firestore";
import { useSetWeightContext, useWeightContext } from "../functions/Context";

import "../styles/DefaultScreen.css";

const SetDailyWeightScreen: React.FC = () => {
  const router = useIonRouter();

  const [number, setNumber] = useState<number>();
  var d = new Date();
  var date =
    String(d.getDate()) +
    "-" +
    String(d.getMonth() + 1) +
    "-" +
    String(d.getFullYear());

  const weights = useWeightContext();
  const setWeights = useSetWeightContext();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
            <IonTitle>Set Daily Weight</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="page">
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1>Today's Weight</h1>
                <IonItem>
                  <IonLabel>Enter Weight (in kg):</IonLabel>
                  <IonInput
                    type="number"
                    value={number}
                    placeholder="eg. 45kg"
                    onIonChange={(e) =>
                      setNumber(parseInt(e.detail.value!, 10))
                    }
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <p>Today's Date: {date}</p>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="full"
                  onClick={() => {
                    if (number == null) {
                      alert("Please input a number!");
                    } else {
                      writeWeight(date, number);
                      weights.splice(-1, number);
                      setWeights([...weights, number]);
                      alert("Successfully saved today's weight!");
                    }
                  }}
                >
                  <IonLabel>Register Weight</IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SetDailyWeightScreen;
