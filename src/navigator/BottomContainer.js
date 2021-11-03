import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import router from '@router';
import {bottom} from '@screens';
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomContainer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={router.HOME_SCREEN}
        component={bottom[router.HOME_SCREEN]}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={router.SHOPPING_SCREEN}
        component={bottom[router.SHOPPING_SCREEN]}
        options={{
          tabBarLabel: 'Mua sắm',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={router.QR_CODE_SCREEN}
        component={bottom[router.QR_CODE_SCREEN]}
        options={{
          tabBarLabel: 'Qr code',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={router.VOUCHER_SCREEN}
        component={bottom[router.VOUCHER_SCREEN]}
        options={{
          tabBarLabel: 'Voucher',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="vote" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={router.PROFILE_SCREEN}
        component={bottom[router.PROFILE_SCREEN]}
        options={{
          tabBarLabel: 'Khác',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomContainer;
