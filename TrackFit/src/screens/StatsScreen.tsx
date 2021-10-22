import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { dynamicNavigate } from '../functions/navigation';
import { useIonRouter } from '@ionic/react';
import LineChart from '../components/LineChart';
import { useEffect, useState } from 'react';
import { getWeek } from '../data/utilities/Firestore';
// import './Tab3.css';

const StatsScreen: React.FC = () => {
	//	Initializing our router
	const router = useIonRouter();
    const [weights, setWeights] = useState<any>([]);

    useEffect(() => {
        getWeek().then(function(result) {
            console.log("did")
            if (result !== null) {setWeights(result)} else {setWeights([])}
        })
        // console.log(weights)
        console.log("did useEffect")
    }, []);

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
              <LineChart weights={weights} days={['MON','TUE','WED','THU','FRI','SAT','SUuN','']} />
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default StatsScreen;
