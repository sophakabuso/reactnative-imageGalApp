import 'setimmediate';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from './src/screens/GalleryScreen';
import ImageScreen from './src/screens/ImageScreen';
import { createTable } from './src/services/Database'; // adjust the path according to your project structure

const Stack = createStackNavigator();

/**
 * The main component of the application.
 * @returns {JSX.Element} The JSX element representing the application.
 */
export default function App() {
  useEffect(() => {
    createTable();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}