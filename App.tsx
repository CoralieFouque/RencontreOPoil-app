import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/root-stack-param-list';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/home.page';
import Profil from './src/pages/profil.page';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loaded] = useFonts({
    //Outfit
    'Outfit-Regular': require('./assets/fonts/Outfit/Outfit-Regular.ttf'),
    //Poppins
    'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins/Poppins-SemiBold.ttf')
  });


  if(!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Profil'
          component={Profil}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
