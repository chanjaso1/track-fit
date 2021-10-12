import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useIonRouter } from "@ionic/react";
// import './Tab1.css';
import { dynamicNavigate } from '../functions/navigation';

const UserProfileScreen: React.FC = () => {
	//	Initializing our router
	const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton ></IonBackButton>
          <IonTitle>User Profile Screen</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">test</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="testing" />
        <IonButton onClick={() => router.goBack()}>
            <IonLabel>Click here</IonLabel>
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default UserProfileScreen;
