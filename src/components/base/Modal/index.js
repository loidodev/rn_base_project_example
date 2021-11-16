import {height} from '@responsive';
import React, {useEffect, useState} from 'react';
import {
  Modal as ReactNativeModal,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

const MODAL_BACKDROP_OPACITY = 0.4;
const CONFIG = {duration: 500, easing: Easing.ease};

const ModalBox = ({
  isVisible,
  setIsVisible,
  position = 'bottom',
  onBackdropPress,
  backdropStyle,
  containerStyle,
  children,
  ...rest
}) => {
  const animatedValue = useSharedValue(0);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setModalShow(true);
      animatedValue.value = withTiming(1, CONFIG);
    } else {
      animatedValue.value = withTiming(0, CONFIG, isFinished => {
        isFinished && runOnJS(setModalShow)(false);
      });
    }
  }, [animatedValue, isVisible]);

  const rOverLayStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedValue.value,
      [0, 1],
      [0, MODAL_BACKDROP_OPACITY],
    ),
  }));

  const rContentStyle = useAnimatedStyle(() => {
    return position === 'center'
      ? {
          flex: 1,
          justifyContent: 'center',
          transform: [
            {
              scale: interpolate(animatedValue.value, [0, 1], [0, 1]),
            },
          ],
        }
      : {
          flex: 1,
          justifyContent: 'flex-end',
          transform: [
            {
              translateY: interpolate(animatedValue.value, [0, 1], [height, 0]),
            },
          ],
        };
  });

  const _onCloseModal = () => {
    setIsVisible && setIsVisible(false);
  };

  return (
    <ReactNativeModal
      {...rest}
      transparent
      animationType="none"
      visible={modalShow}>
      <TouchableWithoutFeedback onPress={_onCloseModal}>
        <Animated.View
          style={[styles.backdrop, rOverLayStyle, backdropStyle]}
        />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[rContentStyle, containerStyle]}
        pointerEvents="box-none">
        {children}
      </Animated.View>
    </ReactNativeModal>
  );
};

export default ModalBox;
