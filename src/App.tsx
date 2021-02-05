import {
  IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router'
import React from 'react';
import { pizzaOutline as recipeIcon, personCircleOutline as personIcon, homeOutline as homeIcon} from 'ionicons/icons';
import {Redirect, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import EntryPage from './pages/EntryPage';
import WelcomePage from './pages/WelcomPage';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>

       
        <IonRouterOutlet>
      <Route exact path="/entries">
        <HomePage />
      </Route>
      <Route exact path="/profile">
        <ProfilePage />
      </Route>
      <Route exact path="/entries/:name">
        <EntryPage />
      </Route>
      <Route exact path="/">
        <WelcomePage />
      </Route>
      
      </IonRouterOutlet>
      
      
      
      
      <IonTabBar slot ="bottom">
      <IonTabButton tab= "home" href="/">
          <IonIcon icon={homeIcon} />
          <IonLabel>Welcome</IonLabel>
          </IonTabButton>
        <IonTabButton tab= "recipe" href="/entries">

          <IonIcon icon={recipeIcon} />
          <IonLabel>Recipes</IonLabel>
          </IonTabButton>




        <IonTabButton tab= "profile" href="/profile">
          <IonIcon icon={personIcon} />
          <IonLabel>Profile</IonLabel>

        </IonTabButton>
      </IonTabBar>
      </IonTabs>
      </IonReactRouter>
      
    </IonApp>
  );
};

export default App;
