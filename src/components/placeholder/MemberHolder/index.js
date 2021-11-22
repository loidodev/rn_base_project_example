/* eslint-disable react-native/no-inline-styles */
import {Block, Shimmer} from '@components';
import {DATA_TEMPLATE} from '@constants';
import {width} from '@utils/responsive';
import React from 'react';
import {FlatList} from 'react-native';

const MemberHolder = () => {
  const _keyExtractor = (_, index) => String(index);

  const _renderItem = () => {
    return (
      <Block>
        <Shimmer width={width} height={15} />
        <Shimmer width={width} height={250} />
      </Block>
    );
  };

  return (
    <Block flex margin={12}>
      <FlatList
        data={DATA_TEMPLATE}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default MemberHolder;
