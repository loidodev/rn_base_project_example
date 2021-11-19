import {Block, Text} from '@components';
import {ICONS} from '@constants';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import styles from './styles';

const Empty = ({
  icon,
  lottie,
  content,
  contentMore,
  onPress,
  style,
  imageStyles,
}) => {

  return (
    <Block flex alignCenter justifyCenter padding={12} style={style}>
      {lottie ? (
        <LottieView
          loop
          autoPlay
          source={lottie}
          style={[styles.lottie, imageStyles]}
        />
      ) : (
        <Image
          source={icon || ICONS.placeholder}
          style={styles.icon}
          resizeMode="contain"
        />
      )}
      <Text size={16}>{content || 'Không có sản phẩm'}</Text>
      {/* {contentMore && (
        <Pressable onPress={onPress}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={config.general_background_color}
            style={styles.button}>
            <Text center color="white">
              {contentMore}
            </Text>
          </LinearGradient>
        </Pressable>
      )} */}
    </Block>
  );
};

export default Empty;
