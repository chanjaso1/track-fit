import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { dynamicNavigate } from '../functions/navigation';
import { useIonRouter } from '@ionic/react';
// import './Tab3.css';

const StatsScreen: React.FC = () => {
	//	Initializing our router
	const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stats Screen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Stats" />
        <IonButton onClick={() => dynamicNavigate("/setDailyWeightScreen", "forward", router)}>
            <IonLabel>Add a weight</IonLabel>
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default StatsScreen;
