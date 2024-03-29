import {Block, Icon, Pressable, Text} from '@components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {hs, vs} from '@responsive';
import router from '@router';
import {bottom} from '@screens';
import {COLORS} from '@theme';
import {handleAuthentication} from '@utils';
import * as React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabStack = createBottomTabNavigator();

const BottomContainer = () => {
  const insets = useSafeAreaInsets();

  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: vs(60) + insets.bottom,
          paddingHorizontal: hs(12),
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          display: route.name === router.QR_CODE_SCREEN ? 'none' : 'flex',
        },
        tabBarButton: ({accessibilityState, onPress}) => {
          const focused = accessibilityState.selected;
          const icons = {
            [router.HOME_SCREEN]: 'home',
            [router.SHOPPING_SCREEN]: 'shopping',
            [router.QR_CODE_SCREEN]: 'qrcode-scan',
            [router.VOUCHER_SCREEN]: 'vote',
            [router.PROFILE_SCREEN]: 'account-settings',
          };
          const labels = {
            [router.HOME_SCREEN]: 'Trang chủ',
            [router.SHOPPING_SCREEN]: 'Mua sắm',
            [router.QR_CODE_SCREEN]: 'Qr Code',
            [router.VOUCHER_SCREEN]: 'Voucher',
            [router.PROFILE_SCREEN]: 'Tài khoản',
          };

          const _onPress = () => {
            if (
              route.name === router.SHOPPING_SCREEN ||
              route.name === router.VOUCHER_SCREEN
            ) {
              handleAuthentication(() => {
                onPress();
              });
            } else {
              onPress();
            }
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
              <Pressable flex alignCenter justifyCenter onPress={_onPress}>
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
      <TabStack.Screen
        name={router.HOME_SCREEN}
        component={bottom[router.HOME_SCREEN]}
      />
      <TabStack.Screen
        name={router.SHOPPING_SCREEN}
        component={bottom[router.SHOPPING_SCREEN]}
      />
      <TabStack.Screen
        name={router.QR_CODE_SCREEN}
        component={bottom[router.QR_CODE_SCREEN]}
      />
      <TabStack.Screen
        name={router.VOUCHER_SCREEN}
        component={bottom[router.VOUCHER_SCREEN]}
      />
      <TabStack.Screen
        name={router.PROFILE_SCREEN}
        component={bottom[router.PROFILE_SCREEN]}
      />
    </TabStack.Navigator>
  );
};

export default BottomContainer;
