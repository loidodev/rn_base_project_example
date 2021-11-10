import {Block} from '@components';
import {vs} from '@responsive';
import React from 'react';
import {RefreshControl} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BannerHeader from './components/BannerHeader';
import Information from './components/Information';

const HEIGHT_BG_WAVE = 100;
const HEIGHT_AVATAR = 100;
const HEIGHT_BOX_INFO = 60;
const MAX_HEIGHT_INFO = HEIGHT_AVATAR + HEIGHT_BOX_INFO;
const MIN_HEIGHT_INFO = HEIGHT_BG_WAVE;

const Profile = () => {
  const {top} = useSafeAreaInsets();
  const scrollY = useSharedValue(0);

  const TOTAL_HEIGHT_BG_WAVE = top + HEIGHT_BG_WAVE;

  const _onScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <Block flex>
      {/* banner */}
      <BannerHeader height={TOTAL_HEIGHT_BG_WAVE} />
      {/* content */}
      <Block flex safeAreaTop>
        <Animated.ScrollView
          onScroll={_onScroll}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={false} />}>
          <Block height={HEIGHT_BG_WAVE} />
          <Block
            height={MAX_HEIGHT_INFO}
            style={{marginTop: vs(-HEIGHT_AVATAR / 2)}}
          />
          <Block height={500} backgroundColor="red" />
          <Block height={500} backgroundColor="purple" />
          <Block height={500} backgroundColor="red" />
        </Animated.ScrollView>
        <Information
          scrollY={scrollY}
          heightAvatar={HEIGHT_AVATAR}
          heightBoxInfo={HEIGHT_BOX_INFO}
          maxHeightInfo={MAX_HEIGHT_INFO}
          minHeightInfo={MIN_HEIGHT_INFO}
        />
      </Block>
    </Block>
  );
};

export default Profile;
