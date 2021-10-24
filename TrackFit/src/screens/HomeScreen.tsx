import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { useIonRouter } from "@ionic/react";
import { Vibration } from "@ionic-native/vibration/ngx";

import ActivateVibration from "../components/Vibration";

import { dynamicNavigate } from "../functions/navigation";

import { getData } from "../data/utilities/getData";
import ProgressRing from "../components/ProgressRing";
import {
  useGoalsContext,
  useSetGoalsContext,
  useStepsContext,
} from "../functions/Context";
import { useEffect, useState } from "react";
import { getGoals, getProgress, setProgress } from "../data/utilities/Firestore";

const HomeScreen: React.FC = () => {
  const router = useIonRouter();
  let vibration = new ActivateVibration(new Vibration());

  const goals = useGoalsContext();
  const setGoals = useSetGoalsContext();
  const stepContext = useStepsContext();

  useEffect(() => {
    getGoals().then(function(result) {
        if (result !== null) {
            setGoals(result);
          } else {
            setGoals({
                cal: 0, dist: 0, step: 0, weight: 0})
    }})
    getProgress().then(
        function(result) {
            stepContext.currentSteps = result;
    })
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ProgressRing
          vals={[
            stepContext.currentSteps,
            goals.step > stepContext.currentSteps
              ? goals.step - stepContext.currentSteps
              : 0,
          ]}
          labs={["Done", "Not Done"]}
        />
        <div style={{ textAlign: "center", backgroundColor: "#888888" }}>
          <IonText>
            Steps: {stepContext.currentSteps} out of {goals.step}
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
