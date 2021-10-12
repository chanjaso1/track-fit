import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

/* Screens */
import HomeScreen from './screens/HomeScreen';
import InWorkoutScreen from './screens/InWorkoutScreen';
import ResultsScreen from './screens/ResultsScreen';
import SetDailyWeightScreen from './screens/SetDailyWeightScreen';
import SetGoalScreen from './screens/SetGoalScreen';
import SetWorkoutScreen from './screens/SetWorkoutScreen';
import StatsScreen from './screens/StatsScreen';
import UserProfileScreen from './screens/UserProfileScreen';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './styles/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        {/** Navigation */}
        <IonRouterOutlet>
        <Route exact path="/HomeScreen">
          <HomeScreen/>
        </Route>
          <Route exact path="/InWorkoutScreen">
            <InWorkoutScreen />
          </Route>
          <Route exact path="/ResultsScreen">
            <ResultsScreen />
          </Route>
          <Route path="/SetDailyWeightScreen">
            <SetDailyWeightScreen />
          </Route>
          <Route path="/SetGoalScreen">
            <SetGoalScreen />
          </Route>
          <Route path="/SetWorkoutScreen">
            <SetWorkoutScreen />
          </Route>
          <Route path="/StatsScreen">
            <StatsScreen />
          </Route>
          <Route path="/UserProfileScreen">
            <UserProfileScreen />
          </Route>
          <Route exact path="/">
            <Redirect to="/HomeScreen" />
          </Route>
        </IonRouterOutlet>

        {/** Bottom Menu */}
        <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/HomeScreen">
            <IonIcon icon={ellipse} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="stats" href="/StatsScreen">
            <IonIcon icon={triangle} />
            <IonLabel>Stats</IonLabel>
          </IonTabButton>
          <IonTabButton tab="userProfile" href="/UserProfileScreen">
            <IonIcon icon={ellipse} />
            <IonLabel>User Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="setWorkout" href="/setWorkoutScreen">
            <IonIcon icon={square} />
            <IonLabel>Workout</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
