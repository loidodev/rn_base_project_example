/* eslint-disable react-native/no-inline-styles */
import {Block, Image, LazyImage, Pressable, Text} from '@components';
import React from 'react';
import {SIZES} from '@theme';
import {ScrollView} from 'react-native';
import {width} from '@responsive';
import {hs} from '@responsive';
import {IMAGES} from '@contant';

const DATA = [1, 2, 3, 4, 5, 6];

const CategoryProduct = () => {
  const _renderCategoryProduct = (item, index) => {
    return (
      <Pressable
        key={`CategoryProduct-${index}`}
        marginLeft={index !== 0 ? SIZES.medium : 0}>
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
              thumbnail="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              source="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          )}
        </Block>
        <Text center marginTop={SIZES.small} color="primary">
          {index === 0 ? 'Tất cả' : 'Kẹo ho'}
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
          {DATA.map(_renderCategoryProduct)}
        </ScrollView>
      </Block>
    </Block>
  );
};

export default CategoryProduct;
