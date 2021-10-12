import { IonBackButton, IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, IonButtons} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import './Tab2.css';

const SetGoalScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton ></IonBackButton>
          <IonTitle>Set Goal</IonTitle>
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
      </IonContent>
    </IonPage>
  );
};

export default SetGoalScreen;
