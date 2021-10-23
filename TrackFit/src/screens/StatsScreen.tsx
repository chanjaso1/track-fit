import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { dynamicNavigate } from "../functions/navigation";
import { useIonRouter } from "@ionic/react";
import LineChart from "../components/LineChart";
import { useEffect, useState } from "react";
import { getWeek } from "../data/utilities/Firestore";
import { useSetWeightContext, useWeightContext } from "../functions/Context";

import "../styles/styles.css";

const StatsScreen: React.FC = () => {
  const router = useIonRouter(); //	Initializes the router

  const weights = useWeightContext();
  const setWeights = useSetWeightContext();
  const [dates, setDates] = useState(["0", "1", "2", "3", "4", "5", "6", ""]);

  useEffect(() => {
    var d = new Date();
    var p: any = [""];
    getWeek().then(function (result) {
      if (result !== null) {
        setWeights(result);
      } else {
        setWeights([]);
      }
    });
    for (var i = 0; i < 7; i++) {
      p = [d.getDate().toString(), ...p];
      d.setDate(d.getDate() - 1);
    }
    setDates(p);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stats / Weight Graph Screen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="page">
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1>Weight Last 7 Days</h1>
                <p>This graph displays your weight for the past 7 days.</p>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <LineChart weights={weights} days={dates} />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h1>Today's Weight</h1>
                <p>Click this button to enter today's weight.</p>
                <IonButton
                  expand="full"
                  onClick={() =>
                    dynamicNavigate("/setDailyWeightScreen", "forward", router)
                  }
                >
                  <IonLabel>Set Today's weight</IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default StatsScreen;
