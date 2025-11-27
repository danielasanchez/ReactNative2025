import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../Screens/SearchScreen';
import DetailScreen from '../Screens/DetailScreen';

const Stack = createStackNavigator();

export default function StackNavigator1() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DetailScreen"
                component={DetailScreen}
                options={({ route }) => ({
                    title: route.params.movie.Title
                })

                }

            />

        </Stack.Navigator>
    )
}