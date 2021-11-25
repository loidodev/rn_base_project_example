/* eslint-disable react-native/no-inline-styles */
import {Block, LazyImage, Text} from '@components';
import {width} from '@responsive';
import {SIZES} from '@theme';
import React, {useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const BannerHome = ({data = [], index, setIndex}) => {
  const [indexCur, setIndexCur] = useState(1);

  const _onChangeIndex = ({index}) => {
    setIndexCur(index + 1);
  };

  const _renderItem = ({item}) => {
    return (
      <LazyImage
        overflow="hidden"
        style={{width: width - 24, height: width / 2.3}}
        radius={SIZES.small}
        source={item}
        thumbnail={item}
      />
    );
  };

  const _renderPagination = () => {
    return (
      <Block absolute right={0} padding={6}>
        <Block
          alignCenter
          justifyCenter
          radius={6}
          margin={6}
          paddingHorizontal={8}
          paddingVertical={4}
          backgroundColor="#00000060">
          <Text fontSize={12} color="white" fontType="bold">
            {indexCur} / {data?.length || 0}
          </Text>
        </Block>
      </Block>
    );
  };

  return (
    <Block>
      <SwiperFlatList
        style={{marginHorizontal: 12, marginTop: 12}}
        autoplay
        autoplayLoop
        showPagination
        data={data}
        renderItem={_renderItem}
        onChangeIndex={_onChangeIndex}
        PaginationComponent={_renderPagination}
      />
    </Block>
  );
};

export default BannerHome;
