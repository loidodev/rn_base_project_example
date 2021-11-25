/* eslint-disable react-native/no-inline-styles */
import {GridList, Shimmer} from '@components';
import {SIZES} from '@theme';
import {createDataTemplate} from '@utils';
import React from 'react';

const DATA = createDataTemplate(10);

const HolderProductByType = () => {
  const _renderItem = () => {
    return (
      <Shimmer
        containerStyle={{width: '100%'}}
        height={250}
        radius={SIZES.small}
      />
    );
  };

  return <GridList data={DATA} renderItem={_renderItem} />;
};

export default HolderProductByType;
