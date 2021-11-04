import {
  handleFlex,
  handleFlexGrow,
  handleFlexShrink,
  handleRound,
  handleSquare,
} from '@components/shared';
import {hs, vs} from '@responsive';
import {COLORS, FONTS} from '@theme';
import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Text = ({
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
  //color
  backgroundColor,
  borderColor,
  color,
  opacity,
  //font
  h1,
  h2,
  h3,
  h4,
  h5,
  title,
  large,
  medium,
  small,
  tiny,
  light,
  bold,
  heavy,
  block,
  //text style
  center,
  right,
  fontSize,
  fontFamily,

  numberOfLines,
  style,
  children,
  ...rest
}) => {
  const insets = useSafeAreaInsets();

  const customStyles = [
    //default
    {color: COLORS.black},
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
    //color
    backgroundColor && {
      backgroundColor: COLORS[backgroundColor] || backgroundColor,
    },
    borderColor && {
      borderColor: COLORS[borderColor] || borderColor,
    },
    color && {color: COLORS[color] || color},
    opacity && {opacity},
    //font
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    h4 && styles.h4,
    h5 && styles.h5,
    title && {fontSize: hs(32)},
    large && {fontSize: hs(18)},
    medium && {fontSize: hs(15)},
    small && {fontSize: hs(11)},
    tiny && {fontSize: hs(10)},
    light && {fontWeight: '200'},
    bold && {fontWeight: '600'},
    heavy && {fontWeight: '700'},
    block && {fontWeight: '900'},
    //text style
    center && {textAlign: 'center'},
    right && {textAlign: 'right'},
    fontSize && {fontSize: hs(fontSize)},
    fontFamily && {fontFamily: FONTS[fontFamily] || FONTS.sanRegular},

    {...StyleSheet.flatten(style)},
  ];

  return (
    <RNText {...rest} style={customStyles} numberOfLines={numberOfLines}>
      {children}
    </RNText>
  );
};

export default Text;
