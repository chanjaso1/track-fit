import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonItemDivider,
} from "@ionic/react";
import { useIonRouter } from "@ionic/react";
// import { Vibration } from "@ionic-native/vibration/ngx";
// import ActivateVibration from "../components/Vibration";
import ProgressRing from "../components/ProgressRing";
import {
  useGoalsContext,
  useSetGoalsContext,
  useStepsContext,
} from "../functions/Context";
import { useEffect, useState } from "react";
import { getGoals, getProgress } from "../data/utilities/Firestore";

import "../styles/styles.css";

const HomeScreen: React.FC = () => {
  const router = useIonRouter(); //	Initializes the router
  // let vibration = new ActivateVibration(new Vibration());

  const goals = useGoalsContext();
  const setGoals = useSetGoalsContext();
  const stepContext = useStepsContext();
  // Using stepContext.currentSteps etc directly in views sometimes don't cause a rerender, so use hook instead.
  const [prog, setProg] = useState<number>(0);
  const [run, setRun] = useState<number>(0);
  const [walk, setWalk] = useState<number>(0);
  const [arbi, setArbi] = useState<boolean>(false);

  // Synchronise stepContext's passed daily progress variables with Firestore when opening app
  useEffect(() => {
    getProgress().then(function (result) {
      stepContext.currentSteps = result.r + result.w;
      stepContext.currentRunningSteps = result.r;
      stepContext.currentWalkingSteps = result.w;
      setArbi(!arbi);
    });
    getGoals().then(function (result) {
      if (result !== null) {
        setGoals(result);
      } else {
        setGoals({
          cal: 0,
          dist: 0,
          step: 0,
          weight: 0,
        });
      }
    });
  }, []);

  // Using stepContext.currentSteps directly in views sometimes don't cause a rerender, so use hook instead.
  useEffect(() => {
    setProg(stepContext.currentSteps);
    setRun(stepContext.currentRunningSteps);
    setWalk(stepContext.currentWalkingSteps);
  }, [stepContext.currentSteps, arbi]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        fullscreen
        scrollEvents={true}
        onIonScrollStart={() => {}}
        onIonScroll={() => {}}
        onIonScrollEnd={() => {}}
      >
        <IonGrid>
          <div className="homePage">
            <IonRow>
              <IonCol>
                <h1>TrackFit</h1>
                <h2>
                  Welcome to TrackFit!
                  <br />
                  View your daily progress below.
                  <IonItemDivider />
                </h2>
              </IonCol>
            </IonRow>
            {/* Steps Taken */}
            <p>
              Steps: {prog} out of {goals.step}
              <br />
            </p>
            <ProgressRing
              vals={[prog, goals.step > prog ? goals.step - prog : 0]}
              labs={["Steps Done", "Steps to Go"]}
            />
            <IonItemDivider />
            {/* Calories Burned */}
            <p>
              Calories Burned:{" "}
              {Math.floor(walk / 16.9) + Math.floor(run / 8.45)} out of{" "}
              {goals.cal}
              <br />
            </p>
            <ProgressRing
              vals={[
                Math.floor(walk / 16.9) + Math.floor(run / 8.45),
                goals.step > Math.floor(walk / 16.9) + Math.floor(run / 8.45)
                  ? goals.step -
                    Math.floor(walk / 16.9) +
                    Math.floor(run / 8.45)
                  : 0,
              ]}
              labs={["Calories Burned", "Calories to Burn"]}
            />
            <IonItemDivider />
            {/* Distance Travelled */}
            <p>
              Distance Travelled:{" "}
              {Math.floor(walk * 0.74) + Math.floor(run * 1.651)} out of{" "}
              {goals.dist}
              <br />{" "}
            </p>
            <ProgressRing
              vals={[
                Math.floor(walk * 0.74) + Math.floor(run * 1.651),
                goals.step > Math.floor(walk * 0.74) + Math.floor(run * 1.651)
                  ? goals.step -
                    Math.floor(walk * 0.74) +
                    Math.floor(run * 1.651)
                  : 0,
              ]}
              labs={["Distance Travelled", "Distance to Go"]}
            />
            <IonItemDivider />
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
