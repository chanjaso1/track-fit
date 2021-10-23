/**
 * The User Profile screen requests the user to input basic information (name, age, weight) about themselves.
 * The user is also prompted to set their goals that will be used throught out the app.
 *
 * References:
 * https://ionicframework.com/docs/api/input
 * https://www.tutorialandexample.com/ionic-input/
 */
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonInput,
  IonList,
  IonItem,
  IonText,
} from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import { dynamicNavigate } from "../functions/navigation";
import { useState } from "react";
import { updateUserDetails } from "../data/utilities/Firestore";
import { useGoalsContext, useSetGoalsContext } from "../functions/Context";

import "../styles/styles.css";

const UserProfileScreen: React.FC = () => {
  const router = useIonRouter(); // Initializes the router

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(NaN);
  const goals = useGoalsContext();
  const setGoals = useSetGoalsContext();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonTitle>User Profile Screen</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="userProfileBackground">
          <div className="userDetails">
            <h1>Enter User Details</h1>
            <IonList>
              <IonItem>
                <IonLabel>Enter Name: </IonLabel>
                <IonInput
                  value={name}
                  placeholder="eg. Spongebob"
                  onIonChange={(e) => setName(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Enter Age: </IonLabel>
                <IonInput
                  type="number"
                  value={age}
                  placeholder="eg. 25"
                  onIonChange={(e) => setAge(parseInt(e.detail.value!, 10))}
                ></IonInput>
              </IonItem>
            </IonList>
            <IonButton
              expand="full"
              onClick={() => {
                updateUserDetails(name, age);
                alert("Successfully saved your details!");
              }}
            >
              <IonLabel>Save Details</IonLabel>
            </IonButton>
            <h1>Your Goals</h1>
          </div>
          <div className="dailyGoals">
            <p>
              These are the goals you have set for yourself.<br></br>Click on
              SET GOALS to set new goals.
            </p>
            <IonList>
              <IonItem>
                <IonText>Daily Calorie Goal: {goals.cal}</IonText>
              </IonItem>
              <IonItem>
                <IonText>Daily Distance Goal: {goals.dist}</IonText>
              </IonItem>
              <IonItem>
                <IonText>Daily Steps Goal: {goals.step}</IonText>
              </IonItem>
              <IonItem>
                <IonText>Weight Goal: {goals.weight}</IonText>
              </IonItem>
            </IonList>
            <IonButton
              expand="full"
              onClick={() =>
                dynamicNavigate("/SetGoalScreen", "forward", router)
              }
            >
              <IonLabel>Set Goals</IonLabel>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UserProfileScreen;
