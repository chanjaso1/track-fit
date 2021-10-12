import { IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { dynamicNavigate } from '../functions/navigation';
import { useIonRouter } from '@ionic/react';
// import './Tab2.css';

const SetWorkoutScreen: React.FC = () => {
  const router = useIonRouter()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Set Workout Screen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonButton onClick={() => {dynamicNavigate("/InWorkoutScreen", "forward", router)}}>
          <IonLabel>Start</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SetWorkoutScreen;
