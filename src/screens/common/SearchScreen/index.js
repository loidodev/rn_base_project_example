import {Block, HeaderInput, ItemProduct, Text} from '@components';
import {SIZES} from '@theme';
import {hs} from '@utils/responsive';
import React, {useState} from 'react';
import {FlatList, Pressable, ScrollView} from 'react-native';

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SearchScreen = () => {
  const [link, setLink] = useState('');
  
  const _renderSearch = (item, index) => {
    return (
      <Pressable key={`Search-${index}`} marginRight={hs(SIZES.normal)}>
        <Block radius={20} padding={7} backgroundColor="smoke">
          <Text>thảo dược</Text>
        </Block>
      </Pressable>
    );
  };

  return (
    <Block flex backgroundColor="smoke">
      <Block backgroundColor={'white'}>
        <HeaderInput activate={true} link={link} setLink={setLink} />
      </Block>

      <Block flex marginTop={SIZES.small} backgroundColor={'white'}>
        <Block>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: hs(SIZES.medium),
              marginVertical: hs(SIZES.large),
            }}>
            {DATA.map(_renderSearch)}
          </ScrollView>
        </Block>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          numColumns={2}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}) => <ItemProduct item={item} />}
          //   ListEmptyComponent={_renderEmpty}
        />
      </Block>
    </Block>
  );
};

export default SearchScreen;
