import {Block, Icon, Image, Pressable, Text} from '@components';
import locale from '@locale';
import {hs} from '@responsive';
import React from 'react';
import {Badge} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ItemProfile = ({item, index}) => {
  const {image, title, onPress} = item || {};

  const gift = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

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
        <Text size={14}>{title}</Text>
      </Block>
      {title === locale.t('profileScreen.gift') && gift?.length ? (
        <Badge
          value={gift?.length || 0}
          status="error"
          containerStyle={{left: hs(5)}}
        />
      ) : (
        <Icon IconType={AntDesign} iconName="right" iconSize={12} />
      )}
    </Pressable>
  );
};

export default ItemProfile;
