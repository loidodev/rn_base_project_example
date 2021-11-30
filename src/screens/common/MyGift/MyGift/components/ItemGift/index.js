/* eslint-disable react-native/no-inline-styles */
import {Block, LazyImage, Pressable, Text} from '@components';
import {COLORS, SIZES} from '@theme';
import {hs} from '@utils/responsive';
import React, {useRef} from 'react';
import CountDown from 'react-native-countdown-component';

const ItemGift = ({item}) => {
  const {item_id, picture, thumbnail, title, short, date_end} = item;

  const countDownRef = useRef(0);

  const _onChange = number => {
    countDownRef.current = number;
  };

  const _getRelativeTime = () => {
    const today = new Date().getTime();
    const end = new Date(date_end).getTime();

    const one_day = 1000 * 60 * 60 * 24;
    const days = Math.round((end - today) / one_day);
    const result = days * 24 * 60 * 60;

    return result || 0;
  };

  const _onSelectItem = () => {};

  return (
    <Pressable
      onPress={_onSelectItem}
      backgroundColor="white"
      padding={SIZES.medium}
      radius={SIZES.small}
      margin={SIZES.normal}>
      <LazyImage
        style={{width: '100%'}}
        height={200}
        source={picture}
        thumbnail={thumbnail}
      />
      <Block flex marginVertical={15}>
        <Text numberOfLines={1} fontSize={15} heavy>
          {title}
        </Text>
        <Text fontSize={13} numberOfLines={5} marginTop={8} color="placeholder">
          {short}
        </Text>
      </Block>
      <Block row alignCenter space="between">
        <Text fontSize={13} heavy>
          Thời gian còn lại:
        </Text>
        <CountDown
          until={_getRelativeTime()}
          onFinish={() => {}}
          timeToShow={['D', 'H', 'M', 'S']}
          timeLabels={{m: null, s: null}}
          showSeparator
          onChange={_onChange}
          digitStyle={{
            backgroundColor: COLORS.primary,
            width: hs(25),
            height: hs(25),
          }}
          digitTxtStyle={{
            color: COLORS.white,
            fontSize: hs(14),
          }}
          separatorStyle={{
            color: COLORS.primary,
            fontSize: hs(14),
          }}
        />
      </Block>
    </Pressable>
  );
};

export default ItemGift;
