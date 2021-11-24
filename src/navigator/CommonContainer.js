import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common} from '@screens';
import React from 'react';
import router from './router';

const CommonStack = createNativeStackNavigator();

const OPTIONS = {
  gestureEnabled: false,
  cardOverlayEnabled: true,
  cardStyle: {
    backgroundColor: 'transparent',
  },
  cardStyleInterpolator: ({current: {progress}}) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
};

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
        name={router.GET_MEMBER_SCREEN}
        component={common[router.GET_MEMBER_SCREEN]}
      />
      <CommonStack.Screen
        name={router.GET_MEMBER_DERAILS}
        component={common[router.GET_MEMBER_DERAILS]}
      />
      <CommonStack.Screen
        name={router.GET_PRODUCT_DETAILS}
        component={common[router.GET_PRODUCT_DETAILS]}
      />
      <CommonStack.Screen
        name={router.INFORMATION_DETAILS}
        component={common[router.INFORMATION_DETAILS]}
      />
      <CommonStack.Screen
        name={router.COMMENT_DETAILS}
        component={common[router.COMMENT_DETAILS]}
      />
      <CommonStack.Screen
        name={router.GET_COMBO_SCREEN}
        component={common[router.GET_COMBO_SCREEN]}
      />
    </CommonStack.Navigator>
  );
};

export default CommonContainer;
