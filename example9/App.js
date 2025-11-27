import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1';
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';

export default function App() {
  return (
      <NavigationContainer>
        <BottomTabNavigator1/>
      </NavigationContainer>
  );
}

