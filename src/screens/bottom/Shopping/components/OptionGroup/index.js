import {Block, Icon, Pressable, Text} from '@components';
import {hs, vs, width} from '@responsive';
import {SIZES} from '@theme';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DATA = [1, 2, 3, 4];

const OptionGroup = () => {
  const _renderOption = (item, index) => {
    return (
      <Pressable key={`OptionGroup-${index}`} flex justifyCenter alignCenter>
        <Pressable
          width={35}
          height={35}
          radius={SIZES.medium}
          alignCenter
          justifyCenter
          backgroundColor="smoke">
          <Icon IconType={AntDesign} iconName="search" />
        </Pressable>
        <Text
          center
          small
          marginTop={SIZES.xSmall}
          color="placeholder"
          numberOfLines={1}>
          Danh mục
        </Text>
      </Pressable>
    );
  };

  return (
    <Block
      row
      shadow1
      height={70}
      style={{width: width - hs(24), marginTop: vs(-70 / 2)}}
      alignSelf="center"
      backgroundColor="white"
      radius={SIZES.small}>
      {DATA.map(_renderOption)}
    </Block>
  );
};

export default OptionGroup;
