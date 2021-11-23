// import {icons} from '@assets';
import {Block, Icon, Text} from '@components';
import {ICONS} from '@constants';
// import {routes} from '@navigation/routes';
import {root} from '@navigator/navigationRef';
import {useNavigation} from '@react-navigation/core';
import {COLORS} from '@theme';
import {hs} from '@utils/responsive';
import React from 'react';
import {Animated, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import MenuList from './MenuList';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IonCart from 'react-native-vector-icons/AntDesign';

const HEIGHT = hs(200);
const PressableAmin = Animated.createAnimatedComponent(Pressable);

const HeaderIcon = ({scrollY, title, item_id, onSetAnimated, setIsHeart}) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const cart = useSelector(state => state.cart.data);
  const config = useSelector(state => state.config?.data);

  const opacityBackground = scrollY.interpolate({
    inputRange: [0, HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const opacityTitle = scrollY.interpolate({
    inputRange: [0, HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const backgroundIcon = scrollY.interpolate({
    inputRange: [0, HEIGHT],
    outputRange: [COLORS.lightGray, COLORS.white],
    extrapolate: 'clamp',
  });

  const colorIcon = scrollY.interpolate({
    inputRange: [0, HEIGHT],
    outputRange: [COLORS.white, COLORS.black],
    extrapolate: 'clamp',
  });

  const _onGoBack = () =>
    navigation.canGoBack() ? root.goBack() : root.goBack();

  const _onMoveCart = () => console.log('----------');

  const _renderIcon = (icon, icons, onPress) => (
    <PressableAmin
      onPress={onPress}
      style={{
        backgroundColor: backgroundIcon,
        ...styles.btnIcon,
      }}>
      {/* <Animated.Image
        source={icon}
        resizeMode="contain"
        style={{tintColor: colorIcon, ...styles.icon}}
      /> */}
      <Icon IconType={icons} iconName={icon} iconSize={24} />
      {icon === ICONS.cart && (
        <Animated.View
          style={{
            backgroundColor: config.general_active_color,
            ...styles.textCart,
          }}>
          <Text color="white" size={10}>
            {cart?.length || 0}
          </Text>
        </Animated.View>
      )}
    </PressableAmin>
  );

  return (
    <Block style={styles.container}>
      <Animated.View
        style={{opacity: opacityBackground, ...styles.background}}
      />
      <Block row alignCenter space="between" marginTop={top}>
        {_renderIcon('chevron-back', Ionicons, _onGoBack)}
        <Animated.View style={{opacity: opacityTitle, ...styles.titleWrap}}>
          <Text fontSize={16} bold numberOfLines={1}>
            {title}
          </Text>
        </Animated.View>
        <Block row alignCenter>
          {_renderIcon('shoppingcart', IonCart, _onMoveCart)}
          <MenuList
            item_id={item_id}
            icon={ICONS.menu}
            backgroundIcon={backgroundIcon}
            colorIcon={colorIcon}
            onSetAnimated={onSetAnimated}
            setIsHeart={setIsHeart}
          />
        </Block>
      </Block>
      <Animated.View style={{opacity: opacityBackground, ...styles.shadow}} />
    </Block>
  );
};

export default HeaderIcon;
