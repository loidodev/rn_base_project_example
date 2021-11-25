/* eslint-disable react-native/no-inline-styles */
import {Block, Shimmer} from '@components';
import {createDataTemplate} from '@utils';
import {width} from '@utils/responsive';
import React from 'react';
import {FlatList} from 'react-native';

const DATA = createDataTemplate(10);

const ListProductHolder = () => {
  const _keyExtractor = (_, index) => String(index);

  const _renderItem = () => {
    return <Shimmer width={(width - 34) / 2} height={250} marginVertical={6} />;
  };

  return (
    <Block flex margin={12}>
      <FlatList
        numColumns={2}
        data={DATA}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default ListProductHolder;
