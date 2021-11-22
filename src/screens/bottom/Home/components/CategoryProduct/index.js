/* eslint-disable react-native/no-inline-styles */
import {Block, Image, LazyImage, Pressable, Text} from '@components';
import {IMAGES} from '@constants';
import {hs, width} from '@responsive';
import {SIZES} from '@theme';
import React from 'react';
import {ScrollView} from 'react-native';

const CategoryProduct = ({data = []}) => {
  const newData = [{}, ...data];

  const _renderCategoryProduct = (item, index) => {
    const {picture, title} = item || {};

    return (
      <Pressable
        key={`CategoryProduct-${index}`}
        marginLeft={index !== 0 ? SIZES.medium : 0}
        style={{width: width / 4}}>
        <Block
          radius={SIZES.small}
          borderWidth={1}
          borderColor="primary"
          backgroundColor="primary"
          overflow="hidden"
          style={{
            width: width / 4,
            height: width / 3.8,
          }}>
          {index === 0 ? (
            <Block flex justifyCenter alignCenter>
              <Image
                square={28}
                marginBottom={SIZES.small}
                source={IMAGES.logo_start}
                resizeMode="contain"
              />
              <Text small bold color="white">
                Thảo Dược
              </Text>
              <Text small bold color="white">
                Việt Nam
              </Text>
            </Block>
          ) : (
            <LazyImage
              style={{
                width: '100%',
                height: '100%',
              }}
              source={picture}
            />
          )}
        </Block>
        <Text center marginTop={SIZES.small} color="primary">
          {index === 0 ? 'Tất cả' : title}
        </Text>
      </Pressable>
    );
  };

  return (
    <Block>
      {/* divider */}
      <Block height={SIZES.medium} backgroundColor="smoke" />
      {/* category */}
      <Block>
        <Text medium heavy color="primary" margin={SIZES.medium}>
          DANH MỤC SẢN PHẨM
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: hs(SIZES.medium)}}>
          {newData.map(_renderCategoryProduct)}
        </ScrollView>
      </Block>
    </Block>
  );
};

export default CategoryProduct;
