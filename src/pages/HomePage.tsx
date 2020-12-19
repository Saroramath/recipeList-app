import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import {entries} from '../data';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonList>
        {entries.map((entry) => <IonItem button key ={entry.id} routerLink ={`/entries/${entry.id}`}> {entry.title}
          </IonItem>)}
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;