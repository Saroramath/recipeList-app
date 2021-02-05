import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      This is your profile. You saved a lot!!
      {/* Go to <IonRouterLink routerLink='/home'>Home</IonRouterLink> */}
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
