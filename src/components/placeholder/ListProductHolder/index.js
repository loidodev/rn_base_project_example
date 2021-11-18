/* eslint-disable react-native/no-inline-styles */
import {Block, Shimmer} from '@components';
import {DATA_TEMPLATE} from '@utils/helper';
import {width} from '@utils/responsive';
import React from 'react';
import {FlatList} from 'react-native';

const ListHolder = () => {
  const _keyExtractor = (_, index) => String(index);

  const _renderItem = () => {
    return <Shimmer width={(width - 34) / 2} height={250} />;
  };

  return (
    <Block margin={12}>
      <FlatList
        numColumns={2}
        data={DATA_TEMPLATE}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default ListHolder;
