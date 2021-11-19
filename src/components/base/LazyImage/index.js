import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import styles from './styles';
import {hs, vs} from '@responsive';
import {
  handleFlex,
  handleFlexGrow,
  handleFlexShrink,
  handleRound,
  handleSquare,
} from '@components/shared';
import {COLORS} from '@theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {IMAGES} from '@constants';

const LazyImage = ({
  //layout
  flex,
  flexGrow,
  flexShrink,
  row,
  column,
  space,
  wrap,
  rowCenter,
  alignStart,
  alignCenter,
  alignEnd,
  justifyStart,
  justifyCenter,
  justifyEnd,
  overflow,
  alignSelf,
  zIndex,
  //size
  padding,
  margin,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingVertical,
  paddingHorizontal,
  marginVertical,
  marginHorizontal,
  radius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  translateY,
  safeAreaTop,
  safeAreaBottom,
  //width, height
  width,
  height,
  maxWidth,
  maxHeight,
  square,
  round,
  //position
  relative,
  absolute,
  top,
  left,
  right,
  bottom,
  //color
  backgroundColor,
  borderColor,
  color,
  opacity,
  //shadow
  shadow1,
  shadow2,
  shadow3,

  thumbnail,
  source,
  resizeMode,
  onLayout,
  style,
  children,
  ...rest
}) => {
  const insets = useSafeAreaInsets();

  const customStyles = [
    // layout
    flex && handleFlex(flex),
    flexShrink && handleFlexShrink(flexShrink),
    flexGrow && handleFlexGrow(flexGrow),
    row && {flexDirection: 'row'},
    column && {flexDirection: 'column'},
    space && {justifyContent: `space-${space}`},
    wrap && {flexWrap: 'wrap'},
    rowCenter && styles.rowCenter,
    alignStart && {alignItems: 'flex-start'},
    alignCenter && {alignItems: 'center'},
    alignEnd && {alignItems: 'flex-end'},
    justifyStart && {justifyContent: 'flex-start'},
    justifyCenter && {justifyContent: 'center'},
    justifyEnd && {justifyContent: 'flex-end'},
    overflow && {overflow},
    alignSelf && {alignSelf},
    zIndex && {zIndex},
    //size
    padding && {padding: hs(padding)},
    margin && {margin: hs(margin)},
    paddingTop && {paddingTop: hs(paddingTop)},
    paddingRight && {paddingRight: hs(paddingRight)},
    paddingBottom && {paddingBottom: hs(paddingBottom)},
    paddingLeft && {paddingLeft: hs(paddingLeft)},
    marginTop && {marginTop: hs(marginTop)},
    marginRight && {marginRight: hs(marginRight)},
    marginBottom && {marginBottom: hs(marginBottom)},
    marginLeft && {marginLeft: hs(marginLeft)},
    paddingVertical && {paddingVertical: hs(paddingVertical)},
    paddingHorizontal && {paddingHorizontal: hs(paddingHorizontal)},
    marginVertical && {marginVertical: hs(marginVertical)},
    marginHorizontal && {marginHorizontal: hs(marginHorizontal)},
    radius && {borderRadius: hs(radius)},
    borderTopLeftRadius && {borderTopLeftRadius: hs(borderTopLeftRadius)},
    borderTopRightRadius && {borderTopRightRadius: hs(borderTopRightRadius)},
    borderWidth && {borderWidth: hs(borderWidth)},
    borderTopWidth && {borderTopWidth: hs(borderTopWidth)},
    borderRightWidth && {borderRightWidth: hs(borderRightWidth)},
    borderBottomWidth && {borderBottomWidth: hs(borderBottomWidth)},
    borderLeftWidth && {borderLeftWidth: hs(borderLeftWidth)},
    translateY && {transform: [{translateY: hs(translateY)}]},
    safeAreaTop && {paddingTop: insets.top},
    safeAreaBottom && {paddingTop: insets.bottom},
    //width, height
    width && {width: hs(width)},
    height && {height: vs(height)},
    maxWidth && {maxWidth: hs(width)},
    maxHeight && {maxHeight: vs(height)},
    round && handleRound(hs(round)),
    square && handleSquare(hs(square)),
    //position
    relative && {position: 'relative'},
    absolute && {position: 'absolute'},
    top && {top: hs(top)},
    right && {right: hs(right)},
    bottom && {bottom: hs(bottom)},
    left && {left: hs(left)},
    //color
    backgroundColor && {
      backgroundColor: COLORS[backgroundColor] || backgroundColor,
    },
    borderColor && {
      borderColor: COLORS[borderColor] || borderColor,
    },
    color && {color},
    opacity && {opacity},
    //shadow
    shadow1 && styles.shadow1,
    shadow2 && styles.shadow2,
    shadow3 && styles.shadow3,

    {...StyleSheet.flatten(style)},
  ];

  const rThumbnail = useSharedValue(0);
  const rPicture = useSharedValue(0);

  const onThumbnailLoad = () => {
    rThumbnail.value = withTiming(1);
  };

  const onImageLoad = () => {
    rPicture.value = withTiming(1);
  };

  const thumbnailStyles = useAnimatedStyle(() => ({
    opacity: rThumbnail.value,
  }));

  const pictureStyles = useAnimatedStyle(() => ({
    opacity: rPicture.value,
  }));

  return (
    <View style={customStyles} {...rest}>
      <Animated.View style={[StyleSheet.absoluteFill, thumbnailStyles]}>
        {!!thumbnail && (
          <Image
            source={{uri: thumbnail}}
            style={styles.image}
            resizeMode={resizeMode}
            onLoadStart={onThumbnailLoad}
            blurRadius={1}
          />
        )}
      </Animated.View>
      <Animated.View style={[styles.image, pictureStyles]}>
        <Image
          source={source ? {uri: source} : IMAGES.no_image}
          style={styles.image}
          resizeMode={resizeMode}
          onLoadEnd={onImageLoad}
        />
      </Animated.View>
    </View>
  );
};

export default LazyImage;
