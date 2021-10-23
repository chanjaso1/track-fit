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
// import './Tab2.css';
import { useIonRouter } from "@ionic/react";
import { Vibration } from "@ionic-native/vibration/ngx";

import ActivateVibration from "../components/Vibration";

import { dynamicNavigate } from "../functions/navigation";

import { getData } from "../data/utilities/getData";
import ProgressRing from "../components/ProgressRing";
import { useGoalsContext, useSetGoalsContext, useStepsContext } from "../functions/Context";
import { useState } from "react";

const HomeScreen: React.FC = () => {
  const router = useIonRouter();
  let vibration = new ActivateVibration(new Vibration());

  const goals = useGoalsContext();
  const setGoals = useSetGoalsContext();
  const stepContext = useStepsContext();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
      <ProgressRing vals={[stepContext.currentSteps, goals.step > stepContext.currentSteps ? goals.step-stepContext.currentSteps : 0 ]} labs={["Done", "Not Done"]}/>
     <div style={{textAlign: "center", backgroundColor: '#888888'}}><IonText >Steps: {stepContext.currentSteps} out of {goals.step}</IonText></div>
        

      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
