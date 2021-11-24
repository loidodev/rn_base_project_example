import {Block, Shimmer} from '@components';
import {createDataTemplate} from '@utils';
import {width} from '@utils/responsive';
import React from 'react';
import {FlatList} from 'react-native';

const DATA = createDataTemplate(10);

const MemberHolder = () => {
  const _keyExtractor = (_, index) => String(index);

  const _renderItem = () => {
    return (
      <Block flex>
        <Shimmer width={width} height={18} marginVertical={6} />
        <Shimmer width={width} height={250} />
      </Block>
    );
  };
  return (
    <Block flex margin={12}>
      <FlatList
        data={DATA}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default MemberHolder;
