import {Block, ScaleAmin} from '@components';
import {vs} from '@responsive';
import React from 'react';
import {RefreshControl} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import BannerHeader from './components/BannerHeader';
import Delivery from './components/Delivery';
import {
  HEIGHT_AVATAR,
  HEIGHT_BG_WAVE,
  HEIGHT_BOX_INFO,
} from './components/helper';
import Information from './components/Information';

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
          <ScaleAmin>
            <Delivery />
          </ScaleAmin>
          <ScaleAmin delay={550}>
            <Delivery />
          </ScaleAmin>
          <ScaleAmin delay={650}>
            <Delivery />
          </ScaleAmin>
          <ScaleAmin delay={750}>
            <Delivery />
          </ScaleAmin>
          <ScaleAmin delay={850}>
            <Delivery />
          </ScaleAmin>
        </Animated.ScrollView>
        <Information scrollY={scrollY} />
      </Block>
    </Block>
  );
};

export default Profile;
