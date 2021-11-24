import {Block, Icon, ItemProduct, Text, Pressable} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HotProduct = ({data = []}) => {
  const _renderProduct = (item, index) => {
    return (
      <ItemProduct key={`HotProduct-${index}`} item={item} index={index} />
    );
  };

  return (
    <Block>
      {/* divider */}
      <Block height={SIZES.medium} backgroundColor="smoke" />
      {/* product */}
      <Block backgroundColor="primary">
        <Block
          rowCenter
          space="between"
          paddingTop={SIZES.medium}
          paddingHorizontal={SIZES.medium}>
          <Text medium heavy color="white">
            SẢN PHẨM NỔI BẬT
          </Text>
          <Pressable rowCenter>
            <Text small bold color="white">
              Xem tất cả
            </Text>
            <Icon
              IconType={AntDesign}
              iconName="caretright"
              iconColor="white"
              iconSize={10}
              marginLeft={SIZES.xSmall}
            />
          </Pressable>
        </Block>
        <Block row wrap padding={SIZES.normal}>
          {data?.map(_renderProduct)}
        </Block>
      </Block>
    </Block>
  );
};

export default HotProduct;
