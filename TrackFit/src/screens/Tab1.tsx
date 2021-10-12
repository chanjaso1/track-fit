import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useIonRouter } from "@ionic/react";
import ExploreContainer from '../components/ExploreContainer';
import { dynamicNavigate } from '../functions/navigation';
import './Tab1.css';

const Tab1: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonTitle>Tab 1</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1" />
        <IonButton onClick={() => dynamicNavigate("/test", "forward", router)}>
            <IonLabel>Click here</IonLabel>
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
