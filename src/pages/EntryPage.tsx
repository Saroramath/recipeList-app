import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

import {useParams} from 'react-router';
import {entries} from "../data"


function print(a){
  console.log(a)

}
interface RouteParams{
  id: string;
}

const EntryPage: React.FC = () => {
  const { id } = useParams<RouteParams>(); //hook that display things passed in the route
  const entry = entries.find((entry) => entry.id === id);
  if (!entry){
    throw new Error('No such entry: ${id}');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot = "start">
            <IonBackButton />

          </IonButtons>
          <IonTitle>Entry Page {id}: {entry.title} </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {entry.description}
      {/* Go to <IonRouterLink routerLink='/home'>Home</IonRouterLink> */}
      </IonContent>
    </IonPage>
  );
};

export default EntryPage;
