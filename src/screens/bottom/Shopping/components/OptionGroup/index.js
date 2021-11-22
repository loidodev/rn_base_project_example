import {Block, Image, Pressable, Text} from '@components';
import {hs, vs, width} from '@responsive';
import {SIZES} from '@theme';
import React from 'react';
import {GROUPS} from './data';

const OptionGroup = () => {
  const _renderOption = (item, index) => {
    const {title, picture} = item || {};

    return (
      <Pressable key={`OptionGroup-${index}`} flex justifyCenter alignCenter>
        <Pressable
          width={35}
          height={35}
          radius={SIZES.medium}
          alignCenter
          justifyCenter
          backgroundColor="smoke">
          <Image square={18} resizeMode="contain" source={picture} />
        </Pressable>
        <Text
          center
          small
          marginTop={SIZES.xSmall}
          color="placeholder"
          numberOfLines={1}>
          {title}
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
      {GROUPS.map(_renderOption)}
    </Block>
  );
};

export default OptionGroup;
