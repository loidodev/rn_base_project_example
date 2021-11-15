import {Block, Pressable} from '@components';
import {vs} from '@responsive';
import {SIZES} from '@theme';
import React from 'react';
import {RefreshControl} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import BannerHeader from './components/BannerHeader';
import {GENERAL_LIST, MANAGER_LIST, SUPPORT_LIST} from './components/data';
import Delivery from './components/Delivery';
import {
  HEIGHT_AVATAR,
  HEIGHT_BG_WAVE,
  HEIGHT_BOX_INFO,
} from './components/helper';
import Information from './components/Information';
import ListProfile from './components/ListProfile';

const Profile = () => {
  const scrollY = useSharedValue(0);

  const _onScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <Block flex>
      {/* banner */}
      <BannerHeader scrollY={scrollY} />
      {/* content */}
      <Block flex safeAreaTop>
        <Animated.ScrollView
          onScroll={_onScroll}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={false} />}>
          <Block height={HEIGHT_BG_WAVE} />
          <Block
            style={{
              height: vs(HEIGHT_AVATAR) + vs(HEIGHT_BOX_INFO),
              marginTop: vs(-HEIGHT_AVATAR / 2),
            }}
          />
          <Delivery />
          <ListProfile delay={550} data={MANAGER_LIST} />
          <ListProfile delay={650} data={GENERAL_LIST} />
          <ListProfile delay={750} data={SUPPORT_LIST} />
          <Pressable
            alignCenter
            justifyCenter
            marginHorizontal={SIZES.medium}
            marginVertical={SIZES.normal}
            padding={SIZES.medium}
            radius={SIZES.xxxLarge}
            backgroundColor="primary"
            labelProps={{color: 'white'}}>
            profileScreen.logout
          </Pressable>
        </Animated.ScrollView>
        <Information scrollY={scrollY} />
      </Block>
    </Block>
  );
};

export default Profile;
