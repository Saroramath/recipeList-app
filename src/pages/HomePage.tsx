import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonRouterLink,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import {entries} from '../data';
import EntryPage from './EntryPage';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonList>
        {entries.map((entry) => <IonItem button key ={entry.name} routerLink ={`/entries/${entry.name.replace(/ /g, '-')}`}> <IonThumbnail item-start>  <img src={entry.imageURL} /> </IonThumbnail>{entry.name}
        
          </IonItem>)}
          
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
