import { useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useIonRouter } from "@ionic/react";
import ExploreContainer from '../components/ExploreContainer';
import { dynamicNavigate } from '../functions/navigation';
import { writeWeight } from '../data/utilities/Firestore';
import { useSetWeightContext, useWeightContext } from '../functions/Context';
// import './Tab1.css';

const SetDailyWeightScreen: React.FC = () => {
  const router = useIonRouter();

  const [number, setNumber] = useState<number>();
  var d= new Date();
  var date = String(d.getDate())+"-"+String(d.getMonth()+1)+"-"+String(d.getFullYear());

  const weights = useWeightContext();
  const setWeights = useSetWeightContext();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
          <IonTitle>Set Daily Weight</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          
        <IonItem>
            <IonInput type="number" value={number} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
        </IonItem>
        <IonText>{date}</IonText>

        <IonButton onClick={() => {
            writeWeight(date, number);
            weights.splice(-1, number);
            setWeights([...weights, number]);
            }}>
          <IonLabel>Register Weight</IonLabel>
        </IonButton>
    //
      </IonContent>
    </IonPage>
  );
};

export default SetDailyWeightScreen;
