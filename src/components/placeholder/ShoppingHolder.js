/* eslint-disable react-native/no-inline-styles */
import {Block, Shimmer} from '@components';
import {SIZES} from '@theme';
import {hs, width} from '@utils/responsive';
import React from 'react';

const ShoppingHolder = () => {
  const _renderBanner = () => {
    return (
      <Block
        marginTop={SIZES.medium}
        alignSelf="center"
        style={{
          width: width - hs(24),
          height: width / 2.3,
        }}
        overflow="hidden"
        radius={SIZES.small}>
        <Shimmer flex />
      </Block>
    );
  };

  const _renderProduct = () => {
    return (
      <Block
        marginLeft={SIZES.medium}
        style={{
          width: (width - hs(SIZES.medium)) / 2,
        }}>
        <Block
          style={{
            width: '100%',
            height: width / 2.5,
          }}>
          <Shimmer flex radius={SIZES.small} />
        </Block>
      </Block>
    );
  };

  return (
    <Block flex>
      {_renderBanner()}
      {_renderBanner()}
      <Block
        marginTop={SIZES.medium}
        height={SIZES.medium}
        backgroundColor="smoke"
      />
      <Block>
        <Shimmer
          width={150}
          height={15}
          radius={SIZES.small}
          marginHorizontal={SIZES.medium}
          marginTop={SIZES.medium}
        />
        <Block rowCenter marginTop={SIZES.medium}>
          {_renderProduct()}
          {_renderProduct()}
          {_renderProduct()}
        </Block>
      </Block>
    </Block>
  );
};

export default ShoppingHolder;
