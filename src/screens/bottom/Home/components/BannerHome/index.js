/* eslint-disable react-native/no-inline-styles */
import {Block, LazyImage} from '@components';
import {width} from '@responsive';
import {COLORS, SIZES} from '@theme';
import React from 'react';
import {Pagination, SwiperFlatList} from 'react-native-swiper-flatlist';
import styles from './styles';

const BannerHome = ({data = []}) => {
  const _renderItem = ({item}) => {
    return (
      <LazyImage
        overflow="hidden"
        style={{width: width - 24, height: width / 2.3}}
        radius={SIZES.small}
        source={item?.img_link}
        thumbnail={item?.thumbnail}
      />
    );
  };

  const _renderPagination = rest => {
    return (
      <Pagination
        {...rest}
        paginationStyleItem={styles.dotItem}
        paginationDefaultColor="white"
        paginationActiveColor={COLORS.yellow}
      />
    );
  };

  return (
    <Block>
      <SwiperFlatList
        style={{margin: 12}}
        autoplay
        autoplayLoop
        showPagination
        data={data}
        renderItem={_renderItem}
        PaginationComponent={_renderPagination}
      />
    </Block>
  );
};

export default BannerHome;
