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
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { useIonRouter } from "@ionic/react";
import { dynamicNavigate } from "../functions/navigation";
import { useState } from "react";

const UserProfileScreen: React.FC = () => {
  //	Initializing our router
  const router = useIonRouter();

  const [name, setName] = useState<string>();
  const [age, setAge] = useState<number>();
  const [weight, setWeight] = useState<number>();

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
          <IonItem>
            <IonLabel>Enter Weight (kg): </IonLabel>
            <IonInput
              type="number"
              value={weight}
              placeholder="eg. 50"
              onIonChange={(e) => setWeight(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonButton
          onClick={() => {
            dynamicNavigate("/SetGoalScreen", "forward", router);
          }}
        >
          <IonLabel>Set Goals</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default UserProfileScreen;
