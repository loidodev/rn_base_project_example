// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import router from '@router';
import * as React from 'react';
import AuthContainer from './AuthContainer';
import BottomContainer from './BottomContainer';
import CommonContainer from './CommonContainer';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={router.AUTH_CONTAINER} component={AuthContainer} />
        <Stack.Screen
          name={router.BOTTOM_CONTAINER}
          component={BottomContainer}
        />
        <Stack.Screen
          name={router.COMMON_CONTAINER}
          component={CommonContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
