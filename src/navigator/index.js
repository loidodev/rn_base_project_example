// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import router from '@router';
import {COLORS} from '@theme';
import * as React from 'react';
import {StatusBar} from 'react-native';
import AuthContainer from './AuthContainer';
import BottomContainer from './BottomContainer';
import CommonContainer from './CommonContainer';
import {navigationRef} from './navigationRef';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        colors: {
          background: COLORS.white,
          text: COLORS.black,
        },
      }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={router.BOTTOM_CONTAINER}>
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
