/* eslint-disable react-native/no-inline-styles */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {auth} from '@screens';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import router from './router';

const AuthStack = createNativeStackNavigator();

const AuthContainer = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen
          name={router.SIGN_IN_SCREEN}
          component={auth[router.SIGN_IN_SCREEN]}
        />
        <AuthStack.Screen
          name={router.SIGN_UP_SCREEN}
          component={auth[router.SIGN_UP_SCREEN]}
        />
      </AuthStack.Navigator>
    </SafeAreaView>
  );
};

export default AuthContainer;
