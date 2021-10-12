import { IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { dynamicNavigate } from '../functions/navigation';
import { useIonRouter } from '@ionic/react';
// import './Tab2.css';

const ResultsScreen: React.FC = () => {
  const router = useIonRouter()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Results</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Results" />
        <IonButton onClick={() => {dynamicNavigate("/HomeScreen", "forward", router)}}>
          <IonLabel>Continue</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ResultsScreen;
