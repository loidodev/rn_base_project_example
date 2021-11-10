import {Block, GridList, Image, Pressable, Text} from '@components';
import {commonRoot} from '@navigator/navigationRef';
import {SIZES} from '@theme';
import React from 'react';
import {GROUPS} from './data';

const CategoryGroup = () => {
  const _onPress = value => {
    commonRoot.navigate(value.screenName, {
      params: value,
    });
  };
  const _renderCategory = ({item}) => {
    const {title, picture} = item;

    return (
      <Pressable flex onPress={() => _onPress(item)}>
        <Block
          alignCenter
          justifyCenter
          round={60}
          alignSelf="center"
          backgroundColor="primary">
          <Image source={picture} square={30} resizeMode="contain" />
        </Block>
        <Text
          center
          small
          marginTop={SIZES.small}
          numberOfLines={2}
          color="placeholder">
          {title}
        </Text>
      </Pressable>
    );
  };

  return <GridList numColumns={4} data={GROUPS} renderItem={_renderCategory} />;
};

export default CategoryGroup;
