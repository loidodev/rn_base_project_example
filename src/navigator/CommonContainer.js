import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common} from '@screens';
import React from 'react';
import router from './router';

const Stack = createNativeStackNavigator();

const CommonContainer = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={router.GET_START_SCREEN}
        component={common[router.GET_START_SCREEN]}
      />
    </Stack.Navigator>
  );
};

export default CommonContainer;
