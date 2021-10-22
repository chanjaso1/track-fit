import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { dynamicNavigate } from '../functions/navigation';
import { useIonRouter } from '@ionic/react';
import LineChart from '../components/LineChart';
import { useState } from 'react';
// import './Tab3.css';

const StatsScreen: React.FC = () => {
	//	Initializing our router
	const router = useIonRouter();
    const [weight, setWeights] = useState<any>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stats / Weight Graph Screen</IonTitle>
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
          <IonItem>
              <LineChart weights={[0, 1]} days={['MON','TUE','WED','THU','FRI','SAT','SUN','']} />
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default StatsScreen;
