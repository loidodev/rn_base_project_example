/* eslint-disable react-native/no-inline-styles */
import {Block, Shimmer} from '@components';
import {SIZES} from '@theme';
import React from 'react';

const HolderGift = () => {
  const _renderItem = () => {
    return (
      <Block
        radius={5}
        margin={SIZES.medium}
        padding={SIZES.medium}
        backgroundColor="white">
        <Shimmer style={{width: '100%'}} height={200} radius={SIZES.small} />
        <Shimmer
          style={{width: '100%'}}
          height={80}
          radius={SIZES.small}
          marginVertical={SIZES.small}
        />
        <Block row alignCenter space="between">
          <Shimmer width={80} height={25} radius={SIZES.small} />
          <Shimmer width={100} height={25} radius={SIZES.small} />
        </Block>
      </Block>
    );
  };

  return (
    <Block flex>
      {_renderItem()}
      {_renderItem()}
      {_renderItem()}
      {_renderItem()}
      {_renderItem()}
      {_renderItem()}
    </Block>
  );
};

export default HolderGift;
