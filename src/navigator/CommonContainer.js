/* eslint-disable react-native/no-inline-styles */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common} from '@screens';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import router from './router';

const CommonStack = createNativeStackNavigator();

const CommonContainer = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CommonStack.Navigator screenOptions={{headerShown: false}}>
        <CommonStack.Screen
          name={router.GET_START_SCREEN}
          component={common[router.GET_START_SCREEN]}
        />
        <CommonStack.Screen
          name={router.GET_SEARCH_SCREEN}
          component={common[router.GET_SEARCH_SCREEN]}
        />
        <CommonStack.Screen
          name={router.GET_BIRTHDAY_SCREEN}
          component={common[router.GET_BIRTHDAY_SCREEN]}
        />
        <CommonStack.Screen
          name={router.GET_PARTNER_SCREEN}
          component={common[router.GET_PARTNER_SCREEN]}
        />

        <CommonStack.Screen
          name={router.GET_MENBER_SCREEN}
          component={common[router.GET_MENBER_SCREEN]}
        />
        <CommonStack.Screen
          name={router.GET_MENBER_DERAILS}
          component={common[router.GET_MENBER_DERAILS]}
        />
      </CommonStack.Navigator>
    </SafeAreaView>
  );
};

export default CommonContainer;
