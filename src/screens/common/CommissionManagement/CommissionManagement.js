import {Block, HeaderTitle, Pressable, Text} from '@components';
import locale from '@locale';
import {useRoute} from '@react-navigation/core';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import {COLORS} from '@theme';
import {hs} from '@utils/responsive';
import React from 'react';
import ManagementByType from '../ManagementByType';
import TotalCommission from './components/TotalCommission';

const Tab = createMaterialTopTabNavigator();

const CommissionManagement = () => {
  const {type} = useRoute().params || {};

  const _renderTabBar = props => {
    return (
      <MaterialTopTabBar {...props} renderTabBarItem={_renderTabBarItem} />
    );
  };

  const _renderTabBarItem = ({
    route,
    navigationState,
    position,
    onPress,
    ...rest
  }) => {
    const tabIndex = navigationState.routes.indexOf(route);
    const isFocused = navigationState.index === tabIndex;

    return (
      <Pressable
        key={route.key}
        onPress={onPress}
        flex
        padding={15}
        justifyCenter
        alignCenter
        backgroundColor={isFocused ? 'white' : 'background'}>
        <Text color={isFocused ? 'black' : 'placeholder'}>{route.name}</Text>
      </Pressable>
    );
  };

  return (
    <Block flex>
      <HeaderTitle title={locale.t('commission.commission')} canGoBack />
      <Tab.Navigator
        lazy
        tabBar={_renderTabBar}
        tabBarOptions={{
          activeTintColor: COLORS.blue,
          inactiveTintColor: COLORS.placeholder,
          labelStyle: {
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: hs(14),
          },
          indicatorStyle: {
            backgroundColor: COLORS.blue,
            bottom: -2,
          },
        }}>
        <Tab.Screen
          name={locale.t('commission.list')}
          component={ManagementByType}
          initialParams={{type}}
        />
        <Tab.Screen
          name={locale.t('commission.total')}
          component={TotalCommission}
        />
      </Tab.Navigator>
    </Block>
  );
};

export default CommissionManagement;
