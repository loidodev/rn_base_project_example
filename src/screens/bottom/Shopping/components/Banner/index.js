/* eslint-disable react-native/no-inline-styles */
import {Block, LazyImage} from '@components';
import {hs, width} from '@responsive';
import {SIZES} from '@theme';
import React from 'react';

const Banner = ({source, thumbnail}) => {
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
      <LazyImage
        style={{width: '100%', height: '100%'}}
        source={source}
        thumbnail={thumbnail}
      />
    </Block>
  );
};

export default Banner;
