import {Block, Icon, Pressable, Text} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BoxAddress = () => {
  return (
    <Block backgroundColor="primary">
      <Pressable padding={SIZES.medium}>
        <Text medium bold color="white">
          Giao hàng tới
        </Text>
        <Block rowCenter marginTop={SIZES.small}>
          <Text flex small bold color="white">
            Quý khách vui lòng cập nhật địa chỉ giao hàng
          </Text>
          <Icon
            IconType={AntDesign}
            iconName="right"
            iconColor="white"
            iconSize={12}
            marginLeft={SIZES.small}
          />
        </Block>
      </Pressable>
      <Block height={70 / 2} />
    </Block>
  );
};

export default BoxAddress;
