import {
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      Welcome: You can see all your recipes here:
      <IonRouterLink routerLink='/entries'> Recipes</IonRouterLink> 
      </IonContent>
    </IonPage>
  );
};

export default WelcomePage;
