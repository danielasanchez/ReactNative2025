import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1'
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';
import TopTabNavigator1 from './Navigations/TopTabNavigator1'

export default function App() {
  return (
      <NavigationContainer>
        <TopTabNavigator1/>
      </NavigationContainer>
  );
}

