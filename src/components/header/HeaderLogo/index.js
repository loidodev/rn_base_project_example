import {Block, Icon, Image, Pressable, Text} from '@components';
import {IMAGES} from '@contant';
import {SIZES} from '@theme';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderLogo = () => {
  return (
    <Block rowCenter space="between" padding={SIZES.medium}>
      {/* left */}
      <Block rowCenter>
        <Image
          marginRight={SIZES.small}
          width={35}
          height={35}
          source={IMAGES.logo_start}
          resizeMode="contain"
        />
        <Block>
          <Text medium bold color="primary">
            Thảo Dược
          </Text>
          <Text medium bold color="primary">
            Việt Nam
          </Text>
        </Block>
      </Block>
      {/* right */}
      <Block rowCenter>
        <Pressable paddingHorizontal={SIZES.xSmall}>
          <Icon
            IconType={Ionicons}
            iconName="search-circle-sharp"
            iconSize={30}
          />
        </Pressable>
        <Pressable paddingHorizontal={SIZES.xSmall}>
          <Icon
            IconType={MaterialCommunityIcons}
            iconName="shopping-outline"
            iconSize={24}
          />
        </Pressable>
        <Pressable paddingHorizontal={SIZES.xSmall}>
          <Icon
            IconType={MaterialCommunityIcons}
            iconName="dots-vertical"
            iconColor="lightGray"
            iconSize={28}
          />
        </Pressable>
      </Block>
    </Block>
  );
};

export default HeaderLogo;
