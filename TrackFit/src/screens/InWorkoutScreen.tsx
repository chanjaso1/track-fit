import { IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useIonRouter } from '@ionic/react';
import { dynamicNavigate } from '../functions/navigation';

const InWorkoutScreen: React.FC = () => {
  const router = useIonRouter()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton ></IonBackButton>
          <IonTitle>In Workout</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonButton onClick={() => {dynamicNavigate("/ResultsScreen", "forward", router)}}>
          <IonLabel>End</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default InWorkoutScreen;
