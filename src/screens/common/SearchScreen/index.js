import {Block, HeaderInput, ItemProduct, Text, Pressable} from '@components';
import {hs} from '@responsive';
import {SIZES} from '@theme';
import React, {useState} from 'react';
import {FlatList, ScrollView} from 'react-native';

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const SearchScreen = () => {
  const [keyword, setKeyword] = useState('');

  const _renderKeywordSearch = (_, index) => {
    return (
      <Pressable
        key={`Search-${index}`}
        marginLeft={index !== 0 ? SIZES.small : 0}>
        <Block radius={20} padding={7} backgroundColor="smoke">
          <Text>Thảo dược</Text>
        </Block>
      </Pressable>
    );
  };

  return (
    <Block flex>
      {/* header */}
      <HeaderInput keyword={keyword} setKeyword={setKeyword} />
      {/* list keyword */}
      <Block marginVertical={SIZES.normal}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: hs(SIZES.medium)}}>
          {DATA.map(_renderKeywordSearch)}
        </ScrollView>
      </Block>
      {/* list product */}
      <FlatList
        data={DATA}
        numColumns={2}
        keyExtractor={(_, index) => String(index)}
        renderItem={({item}) => <ItemProduct item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: hs(SIZES.normal)}}
      />
    </Block>
  );
};

export default SearchScreen;
