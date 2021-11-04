/* eslint-disable react-native/no-inline-styles */
import {Block, Icon, Pressable, Text} from '@components';
import React, {useState} from 'react';
import {SIZES} from '@theme';
import Entypo from 'react-native-vector-icons/Entypo';

const DATA = [1, 2, 3, 4, 5, 6, 7, 8];

const CategoryGroup = () => {
  const [widthCategory, setWidthCategory] = useState(null);

  const _onLayout = ({nativeEvent}) => {
    setWidthCategory(nativeEvent.layout.width);
  };

  const _renderCategory = (item, index) => {
    return (
      <Pressable
        justifyCenter
        alignCenter
        key={`Category-${index}`}
        style={{width: '25%'}}
        padding={SIZES.normal}>
        <Block onLayout={_onLayout}>
          {widthCategory && (
            <Block
              alignCenter
              justifyCenter
              style={{
                width: widthCategory,
                height: widthCategory,
                borderRadius: widthCategory,
              }}
              backgroundColor="primary">
              <Icon
                IconType={Entypo}
                iconName="shopping-bag"
                iconColor="white"
                iconSize={widthCategory / 2.2}
              />
            </Block>
          )}
          <Text
            center
            small
            marginTop={SIZES.small}
            numberOfLines={2}
            color="placeholder">
            Mua sắm
          </Text>
        </Block>
      </Pressable>
    );
  };

  return (
    <Block row wrap padding={SIZES.normal}>
      {DATA.map(_renderCategory)}
    </Block>
  );
};

export default CategoryGroup;
