import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { dynamicNavigate } from '../functions/navigation';
import { useIonRouter } from '@ionic/react';
import LineChart from '../components/LineChart';
import { useEffect, useState } from 'react';
import { getWeek } from '../data/utilities/Firestore';
import { useSetWeightContext, useWeightContext } from '../functions/Context';
// import './Tab3.css';

const StatsScreen: React.FC = () => {
	//	Initializing our router
	const router = useIonRouter();
    //const [weights, setWeights] = useState<any>([]);

    const weights = useWeightContext();
    const setWeights = useSetWeightContext();
    const [dates, setDates] = useState(['0','1','2','3','4','5','6','']);

    useEffect(() => {
        var d = new Date();
        var p: any = [''];
        getWeek().then(function(result) {
            if (result !== null) {setWeights(result)} else {setWeights([])}
        })
        for (var i = 0; i < 7; i++) {
            p = [d.getDate().toString(), ...p]
            d.setDate(d.getDate() -1);
        }
        setDates(p)
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
            <IonLabel>Set Today's weight</IonLabel>
          </IonButton>
          <IonItem>
              <LineChart weights={weights} days={dates} />
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default StatsScreen;
