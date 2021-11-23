import {Block, ButtonSubmit} from '@components';
import {commonRoot} from '@navigator/navigationRef';
import {vs} from '@responsive';
import router from '@router';
import actions from '@store/actions';
import {COLORS} from '@theme';
import React, {useRef, useState} from 'react';
import {ActivityIndicator, RefreshControl} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import AvatarPicker from './components/AvatarPicker';
import BannerHeader from './components/BannerHeader';
import BoxLogin from './components/BoxLogin';
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
  const dispatch = useDispatch();
  const scrollViewRef = useRef();
  const scrollY = useSharedValue(0);
  const [isPickerAvatar, setIsPickerAvatar] = useState(false);
  const userInfo = useSelector(state => state.userInfo);
  const logout = useSelector(state => state.logout);
  const updateUser = useSelector(state => state.updateUser);

  const _onScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const _onEditUser = () => {
    commonRoot.navigate(router.EDIT_USER_SCREEN);
  };

  const _onOpenPickerAvatar = () => setIsPickerAvatar(true);

  const _onLogoutUser = () => {
    scrollViewRef.current?.scrollTo({x: 0, y: 0});
    dispatch({type: actions.LOG_OUT_USER});
  };

  const _onChangeAvatar = avatar => {
    dispatch({
      type: actions.UPDATE_USER,
      body: {picture: avatar},
    });
  };

  if (userInfo.isLoading || updateUser.isLoading) {
    return (
      <Block flex justifyCenter alignCenter>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </Block>
    );
  } else if (!userInfo.data) {
    return <BoxLogin />;
  } else {
    return (
      <Block flex>
        {/* banner */}
        <BannerHeader scrollY={scrollY} />
        {/* content */}
        <Block flex safeAreaTop>
          <Animated.ScrollView
            ref={scrollViewRef}
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
            <ButtonSubmit loading={logout.isLoading} onPress={_onLogoutUser}>
              profileScreen.logout
            </ButtonSubmit>
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
          onChangeAvatar={_onChangeAvatar}
        />
      </Block>
    );
  }
};

export default Profile;
