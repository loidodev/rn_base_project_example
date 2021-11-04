import {Icon, Pressable, Text, Block} from '@components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {hs, vs} from '@responsive';
import router from '@router';
import {bottom} from '@screens';
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: vs(60),
          paddingHorizontal: hs(12),
        },
        tabBarButton: ({accessibilityState, onPress}) => {
          const focused = accessibilityState.selected;
          const icons = {
            [router.HOME_SCREEN]: 'home',
            [router.SHOPPING_SCREEN]: 'shopping',
            [router.QR_CODE_SCREEN]: 'qrcode-scan',
            [router.VOUCHER_SCREEN]: 'vote',
            [router.PROFILE_SCREEN]: 'dots-horizontal',
          };
          const labels = {
            [router.HOME_SCREEN]: 'Trang chủ',
            [router.SHOPPING_SCREEN]: 'Mua sắm',
            [router.QR_CODE_SCREEN]: 'Qr Code',
            [router.VOUCHER_SCREEN]: 'Voucher',
            [router.PROFILE_SCREEN]: 'Khác',
          };

          if (route.name === router.QR_CODE_SCREEN) {
            return (
              <Pressable flex alignCenter justifyCenter onPress={onPress}>
                <Block
                  alignCenter
                  justifyCenter
                  width={46}
                  height={46}
                  radius={46 / 2}
                  backgroundColor="primary">
                  <Icon
                    IconType={MaterialCommunityIcons}
                    iconName={icons[route.name]}
                    iconColor="white"
                    iconSize={22}
                  />
                </Block>
              </Pressable>
            );
          } else {
            return (
              <Pressable flex alignCenter justifyCenter onPress={onPress}>
                <Icon
                  IconType={MaterialCommunityIcons}
                  iconName={icons[route.name]}
                  iconColor={focused ? 'primary' : 'lightGray'}
                  iconSize={22}
                />
                <Text small color={focused ? 'primary' : 'lightGray'}>
                  {labels[route.name]}
                </Text>
              </Pressable>
            );
          }
        },
      })}>
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
