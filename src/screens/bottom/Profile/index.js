import {Block} from '@components';
import {commonRoot} from '@navigator/navigationRef';
import {vs} from '@responsive';
import router from '@router';
import React, {useState} from 'react';
import {RefreshControl} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import AvatarPicker from './components/AvatarPicker';
import BannerHeader from './components/BannerHeader';
import BoxLogin from './components/BoxLogin';
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
  const [isPickerAvatar, setIsPickerAvatar] = useState(false);
  const user = false;

  const _onScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const _onEditUser = () => {
    commonRoot.navigate(router.EDIT_USER_SCREEN);
  };

  const _onOpenPickerAvatar = () => setIsPickerAvatar(true);

  if (!user) {
    return <BoxLogin />;
  } else {
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
            <ListProfile delay={600} data={GENERAL_LIST} />
            <ListProfile delay={650} data={SUPPORT_LIST} />
            <ShareAndReferredCode delay={700} />
            <BtnLogout />
          </Animated.ScrollView>
          <Information
            scrollY={scrollY}
            onEditUser={_onEditUser}
            onPickerAvatar={_onOpenPickerAvatar}
          />
        </Block>
        {/* modal */}
        <AvatarPicker
          isVisible={isPickerAvatar}
          setIsVisible={setIsPickerAvatar}
        />
      </Block>
    );
  }
};

export default Profile;
