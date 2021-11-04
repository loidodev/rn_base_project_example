import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common} from '@screens';
import React from 'react';
import router from './router';

const Stack = createNativeStackNavigator();

const AuthContainer = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={router.SIGN_IN_SCREEN}
        component={common[router.SIGN_IN_SCREEN]}
      />
      <Stack.Screen
        name={router.SIGN_UP_SCREEN}
        component={common[router.SIGN_UP_SCREEN]}
      />
    </Stack.Navigator>
  );
};

export default AuthContainer;
