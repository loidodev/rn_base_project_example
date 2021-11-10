import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common} from '@screens';
import React from 'react';
import router from './router';

const CommonStack = createNativeStackNavigator();

const CommonContainer = () => {
  return (
    <CommonStack.Navigator screenOptions={{headerShown: false}}>
      <CommonStack.Screen
        name={router.GET_START_SCREEN}
        component={common[router.GET_START_SCREEN]}
      />
      <CommonStack.Screen
        name={router.GET_SEARCH_SCREEN}
        component={common[router.GET_SEARCH_SCREEN]}
      />
      {/* CategoryGroup */}
      <CommonStack.Screen
        name={router.GET_BIRTHDAY_SCREEN}
        component={common[router.GET_BIRTHDAY_SCREEN]}
      />
      <CommonStack.Screen
        name={router.GET_PARTNER_SCREEN}
        component={common[router.GET_PARTNER_SCREEN]}
      />
    </CommonStack.Navigator>
  );
};

export default CommonContainer;
