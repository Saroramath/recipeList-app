import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import {alarmOutline as timerIcon}  from 'ionicons/icons'

import {useParams} from 'react-router';
import {entries} from "../data"


function print(a){
  console.log(a)

}
interface RouteParams{
  name: string;
} 

const EntryPage: React.FC = () => {
  const {name} = useParams<RouteParams>(); //hook that display things passed in the route
  const entry = entries.find((entry) => entry.name === name.replace(/-/g, ' '));
  /* if (!entry){
    throw new Error('No such entry: ${name}');
  } */
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot = "start">
            <IonBackButton />

          </IonButtons>
          <IonTitle> {entry.name}  </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

<IonCard>
  <img src = {entry.imageURL}/>
</IonCard>


{/* Ingredients */}

<IonCard>
 <IonCardTitle> Ingredients: </IonCardTitle> 
<IonList>
        {entry.ingredients.map((ingred) => <IonItem key ={ingred.name}>   <IonLabel>
            <h2>{ingred.name.toUpperCase()}</h2>
            <h3>Quantity: {ingred.quantity}</h3>
            <p>type: {ingred.type}</p>
          </IonLabel>
        
          </IonItem>)}
          
          
</IonList>
</IonCard>

<IonCard>
  <IonCardTitle>
    Steps:
  </IonCardTitle>
  <IonList>
        {entry.steps.map((step,i) => <IonItem key ={step}>  
            <p>{i+1}. {step}</p> 
            
            <IonIcon slot="end" icon={timerIcon}> </IonIcon>
             <IonNote slot="end" color="success">{entry.timers[i]} Mins </IonNote>
          
        
  </IonItem>)}
       
</IonList>

</IonCard>

<IonCard>
<a href= {entry.originalURL}>Visit Website</a>
</IonCard>


</IonContent>
    </IonPage>
  );
};

export default EntryPage;
