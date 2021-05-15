import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {CameraApp} from './components/CameraApp.tsx';
import {ImageDisplay} from './components/ImageDisplay.tsx';
import React, { useState, useEffect, useRef } from 'react';

const Stack = createStackNavigator();

const App = () => {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CameraApp"
          component={CameraApp}
        />
        <Stack.Screen 
        name="ImageDisplay"
         component={ImageDisplay} />

      </Stack.Navigator>
    </NavigationContainer>
    );
};
export default App;
