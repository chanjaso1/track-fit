import { IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import './Tab2.css';

const InWorkoutScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>In Workout</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonButton onClick={() => {console.log("clicking")}}>
          <IonLabel>click here</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default InWorkoutScreen;
