import { IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import './Tab2.css';

import { useIonRouter } from "@ionic/react";
import { dynamicNavigate } from '../functions/navigation';

import { getData } from '../data/utilities/getData';

const HomeScreen: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonButton onClick={() => {console.log("clicking"); getData();}}>
          <IonLabel>click here</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;