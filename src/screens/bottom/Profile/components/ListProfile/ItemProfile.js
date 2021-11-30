import {Block, Icon, Image, Pressable, Text} from '@components';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ItemProfile = ({item, index}) => {
  const {image, title, onPress} = item || {};

  return (
    <Pressable
      onPress={() => {
        onPress && onPress({title});
      }}
      rowCenter
      space="between"
      paddingHorizontal={12}
      paddingVertical={16}
      borderTopWidth={index === 0 ? 0 : 1}
      borderColor="smoke">
      <Block row alignCenter>
        <Image
          square={22}
          marginRight={16}
          source={image}
          resizeMode="contain"
        />
        <Text fontSize={14}>{title}</Text>
      </Block>
      <Icon IconType={AntDesign} iconName="right" iconSize={12} />
    </Pressable>
  );
};

export default ItemProfile;
