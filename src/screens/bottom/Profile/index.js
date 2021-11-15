import {Block} from '@components';
import {vs} from '@responsive';
import React from 'react';
import {RefreshControl} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import BannerHeader from './components/BannerHeader';
import BtnLogout from './components/BtnLogout';
import {GENERAL_LIST, MANAGER_LIST, SUPPORT_LIST} from './components/data';
import Delivery from './components/Delivery';
import {
  HEIGHT_AVATAR,
  HEIGHT_BG_WAVE,
  HEIGHT_BOX_INFO,
} from './components/helper';
import Information from './components/Information';
import ListProfile from './components/ListProfile';
import ShareAndReferredCode from './components/ShareAndReferredCode';

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
          <ShareAndReferredCode delay={850} />
          <BtnLogout />
        </Animated.ScrollView>
        <Information scrollY={scrollY} />
      </Block>
    </Block>
  );
};

export default Profile;
