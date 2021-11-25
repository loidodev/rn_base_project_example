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
    </CommonStack.Navigator>
  );
};

export default CommonContainer;
