import {Block, HeaderSearch, ItemMenber} from '@components';
import {SIZES} from '@theme';
import {hs} from '@utils/responsive';
import React from 'react';
import {FlatList} from 'react-native';
const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const Menber = value => {
  const {title} = value.route.params.params;

  return (
    <Block flex>
      <HeaderSearch canGoBack title={title} />
      <Block height={5} backgroundColor="smoke" marginBottom={12} />

      <FlatList
        data={data}
        numColumns={1}
        keyExtractor={(_, index) => String(index)}
        renderItem={({item}) => <ItemMenber item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: hs(SIZES.normal)}}
      />
    </Block>
  );
};

export default Menber;
