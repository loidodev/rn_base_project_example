import {Block, GridList, Image, Pressable, Text} from '@components';
import {SIZES} from '@theme';
import {handleAuthentication} from '@utils';
import React from 'react';
import {GROUPS} from './data';

const CategoryGroup = () => {
  const _renderCategory = ({item}) => {
    const {title, picture, authentication, onPress} = item;

    const _onPress = () => {
      if (authentication) {
        handleAuthentication(() => {
          onPress();
        });
      } else {
        onPress({title});
      }
    };

    return (
      <Pressable flex onPress={_onPress}>
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
