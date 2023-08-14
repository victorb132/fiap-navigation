import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/screens/Home'
import Details from './src/screens/Details'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#121212'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 28,
          }
        }}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Início',
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={({ route }) => ({ title: route.params.firstName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}