import {Block, Icon, Text} from '@components';
import {ICONS} from '@constants';
import {commonRoot, root} from '@navigator/navigationRef';
import router from '@router';
import actions from '@store/actions';
import {CustomToast} from '@utils';
import locale from 'locale';
import React, {useEffect, useState} from 'react';
import {Animated, Image} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import IonCart from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

const MenuList = ({
  backgroundIcon,
  colorIcon,
  icon,
  item_id,
  onSetAnimated,
  setIsHeart,
}) => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const user = useSelector(state => state.tokenUser);
  const userInfo = useSelector(state => state.userInfo.data);
  const favorite = useSelector(state => state.favoriteProduct.data);
  const productDetails = useSelector(state => state.productDetails.data);

  const data = favorite?.filter(function (item) {
    return item.item_id === item_id;
  });

  const [check, setCheck] = useState(
    user ? (data?.length === 0 ? true : false) : true,
  );

  useEffect(() => {
    user
      ? dispatch({
          type: actions.GET_SHOW_FAVORITE_PRODUCT,
          params: {
            user,
          },
        })
      : null;
  }, [dispatch, user]);

  const _onPress = () => {
    if (user) {
      dispatch({
        type: actions.CHECK_FAVORITE,
        body: {
          item_id,
          type: 'product',
        },
        check: true,
        params: {user},
      });
      check
        ? favorite.length === 12
          ? (CustomToast(locale.t('productDetails.error')), setCheck(true))
          : (CustomToast(locale.t('productDetails.like')),
            setIsHeart(check),
            setCheck(false))
        : (CustomToast(locale.t('productDetails.noLike')), setCheck(true));
    } else {
      commonRoot.navigate(router.GET_START_SCREEN);
    }
  };

  // const handleConfirm = () => {
  //   root.navigate(router.BOTTOM_CONTAINER, {
  //     screen: router.PROFILE_SCREEN,
  //   });
  // };

  const _renderOption = (label, iconMenu, route, params) => (
    <MenuOption
      style={styles.row}
      onSelect={() => {
        root.navigate(route, params);
      }}>
      {iconMenu && (
        <Icon
          IconType={MaterialCommunityIcons}
          iconName={iconMenu}
          iconSize={25}
          iconColor={'smoke'}
          marginLeft={-4}
          marginRight={5}
        />
      )}
      <Text size={13} color="white">
        {label}
      </Text>
    </MenuOption>
  );

  const _renderShare = () => (
    <MenuOption
      style={styles.row}
      // onSelect={() =>
      //   Share.share({
      //     url: productDetails.friendly_link,
      //   })
      // }
    >
      <Image
        source={ICONS.share}
        style={styles.iconMenu}
        resizeMode="contain"
      />
      <Text size={13} color="white">
        {locale.t('productDetails.share')}
      </Text>
    </MenuOption>
  );

  const _renderFavorite = () => (
    <MenuOption style={styles.row} onSelect={_onPress}>
      {check ? (
        <Image
          source={ICONS.heart}
          style={styles.iconMenu}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={ICONS.heartCheck}
          resizeMode="contain"
          style={styles.iconMenu}
        />
      )}
      <Text color="white" size={13}>
        {locale.t('productDetails.like')}
      </Text>
    </MenuOption>
  );

  return (
    <Menu>
      <MenuTrigger>
        <Animated.View
          style={{
            backgroundColor: backgroundIcon,
            ...styles.btnIcon,
          }}>
          <Icon
            IconType={IonCart}
            iconName={'dots-three-vertical'}
            iconSize={24}
          />
        </Animated.View>
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={styles.optionStyle}>
        <Block style={styles.shape} />
        <Block
          right={22}
          backgroundColor="#00000090"
          borderRadius={5}
          borderTopRightRadius={0}>
          <Block paddingHorizontal={6}>
            {_renderOption(
              locale.t('productDetails.home_page'),
              'home',
              router.HOME_SCREEN,
            )}
            {_renderOption(
              locale.t('productDetails.portfolio'),
              'shopping',
              router.HOME_SCREEN,
            )}
            {_renderOption(
              locale.t('productDetails.personal'),
              'account-settings',
              router.PROFILE_SCREEN,
            )}
            {_renderFavorite()}
            {_renderShare()}
            {/* {userInfo?.is_request_affiliates === '1' &&
              userInfo?.is_affiliates === '1' &&
              _renderOption(
                locale.t('productDetails.affiliate'),
                ICONS.copy,
                router.ACCOUNT_AFFILIATE,
                productDetails?.friendly_link,
              )} */}
          </Block>
        </Block>
      </MenuOptions>
    </Menu>
  );
};

export default MenuList;
