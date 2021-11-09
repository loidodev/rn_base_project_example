import {Block, GridList, Image, Pressable, Text} from '@components';
import {hs} from '@responsive';
import {SIZES} from '@theme';
import React from 'react';
import {GROUPS} from './data';

const CategoryGroup = () => {
  const _renderCategory = ({item}) => {
    const {title, picture} = item;

    return (
      <Pressable flex padding={SIZES.normal}>
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

  return (
    <GridList
      numColumns={4}
      data={GROUPS}
      renderItem={_renderCategory}
      contentContainerStyle={{padding: hs(SIZES.normal)}}
    />
  );
};

export default CategoryGroup;
