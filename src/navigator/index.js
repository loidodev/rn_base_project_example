// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import router from '@router';
import * as React from 'react';
import BottomContainer from './BottomContainer';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={router.BOTTOM_CONTAINER}
          component={BottomContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
