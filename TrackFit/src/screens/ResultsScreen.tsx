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
  IonItemDivider,
} from "@ionic/react";
import {
  useGoalsContext,
  useStepsContext,
  useWorkoutContext,
} from "../functions/Context";
import { dynamicNavigate } from "../functions/navigation";
import { useIonRouter } from "@ionic/react";

import "../styles/styles.css";
import { getCaloriesBurned, getDistance } from "../functions/DeviceMotion";

/**
 * The results screen shows the final results of the user's workout
 * @returns the results screen
 */
const ResultsScreen: React.FC = () => {
  const router = useIonRouter(); //	Initializes the router

  const stepsContext = useStepsContext();
  const workoutContext = useWorkoutContext();
  const goals = useGoalsContext();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Results</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        fullscreen
        scrollEvents={true}
        onIonScrollStart={() => {}}
        onIonScroll={() => {}}
        onIonScrollEnd={() => {}}
      >
        <div className="page">
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1>Workout Results</h1>
                <p>
                  Congratulations, you completed your workout!
                  <br />
                  View your workout results below.
                  <IonItemDivider />
                </p>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h2>Type of Activity: {stepsContext.exerciseType}</h2>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h2>
                  Total Steps in Workout: {stepsContext.latestWorkoutSteps} /
                  {workoutContext.workoutSteps} steps
                </h2>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h2>
                  Total Distance Travelled: {getDistance(stepsContext)} /
                  {workoutContext.workoutSteps}m
                </h2>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h2>
                  Total Calories Burned: {getCaloriesBurned(stepsContext)}
                </h2>
                <IonItemDivider />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <h3>
                  Your daily step goal is {goals.step} steps.
                  <br />
                  <br />
                  You need to complete{" "}
                  <h4>{goals.step - stepsContext.currentSteps}</h4> more steps
                  to reach your goal!
                </h3>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="full"
                  onClick={() => {
                    dynamicNavigate("/HomeScreen", "forward", router);
                  }}
                >
                  <IonLabel>Continue</IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ResultsScreen;
