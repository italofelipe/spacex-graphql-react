import { useQuery } from "@apollo/react-hooks";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import { LAUNCHES_PAST_QUERY } from "../graphql/launches";
import "./Home.css";

const Home: React.FC = () => {
  const { data, loading } = useQuery(LAUNCHES_PAST_QUERY);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> SpaceX API with React and GraphQL</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />

        {loading ? (
          <p>Loading data...</p>
        ) : (
          data &&
          data.launchesPast.map((launch: any) => (
            <IonItem key={launch.id}>
              {launch.mission_name} | {launch.rocket.rocket_name}
            </IonItem>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
