import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import router from '@router';
import {bottom} from '@screens';
import * as React from 'react';

const Tab = createBottomTabNavigator();

const BottomContainer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={router.HOME_SCREEN}
        component={bottom[router.HOME_SCREEN]}
      />
      <Tab.Screen
        name={router.SHOPPING_SCREEN}
        component={bottom[router.SHOPPING_SCREEN]}
      />
      <Tab.Screen
        name={router.QR_CODE_SCREEN}
        component={bottom[router.QR_CODE_SCREEN]}
      />
      <Tab.Screen
        name={router.VOUCHER_SCREEN}
        component={bottom[router.VOUCHER_SCREEN]}
      />
      <Tab.Screen
        name={router.PROFILE_SCREEN}
        component={bottom[router.PROFILE_SCREEN]}
      />
    </Tab.Navigator>
  );
};

export default BottomContainer;
