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
        name={router.EDIT_USER_SCREEN}
        component={common[router.EDIT_USER_SCREEN]}
      />
      <CommonStack.Screen
        name={router.SEARCH_SCREEN}
        component={common[router.SEARCH_SCREEN]}
      />
      <CommonStack.Screen
        name={router.BIRTHDAY_SCREEN}
        component={common[router.BIRTHDAY_SCREEN]}
      />
      <CommonStack.Screen
        name={router.PARTNER_SCREEN}
        component={common[router.PARTNER_SCREEN]}
      />
      <CommonStack.Screen
        name={router.MEMBER_SCREEN}
        component={common[router.MEMBER_SCREEN]}
      />
      <CommonStack.Screen
        name={router.MEMBER_DETAILS_SCREEN}
        component={common[router.MEMBER_DETAILS_SCREEN]}
      />
      <CommonStack.Screen
        name={router.PRODUCT_BY_TYPE_SCREEN}
        component={common[router.PRODUCT_BY_TYPE_SCREEN]}
      />
      <CommonStack.Screen
        name={router.PRODUCT_DETAILS_SCREEN}
        component={common[router.PRODUCT_DETAILS_SCREEN]}
      />
      <CommonStack.Screen
        name={router.INFORMATION_DETAILS_SCREEN}
        component={common[router.INFORMATION_DETAILS_SCREEN]}
      />
      <CommonStack.Screen
        name={router.COMMENT_DETAILS_SCREEN}
        component={common[router.COMMENT_DETAILS_SCREEN]}
      />
      <CommonStack.Screen
        name={router.COMBO_SCREEN}
        component={common[router.COMBO_SCREEN]}
      />
      <CommonStack.Screen
        name={router.MANAGEMENT_BY_TYPE_SCREEN}
        component={common[router.MANAGEMENT_BY_TYPE_SCREEN]}
      />
    </CommonStack.Navigator>
  );
};

export default CommonContainer;
