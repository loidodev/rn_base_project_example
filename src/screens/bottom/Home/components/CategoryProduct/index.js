/* eslint-disable react-native/no-inline-styles */
import {Block, Image, LazyImage, Pressable, Text} from '@components';
import {IMAGES} from '@constants';
import {hs, width} from '@responsive';
import {SIZES} from '@theme';
import React, {useEffect, useRef} from 'react';
import {ScrollView} from 'react-native';

const ITEM_WIDTH = width / 4;
const ITEM_PADDING = SIZES.medium;
const DURATION = 1500;

const CategoryProduct = ({data = []}) => {
  const scrollViewRef = useRef();
  const translateXRef = useRef(0);
  const isAutoScrollRef = useRef(true);
  const isScrollEndRef = useRef(false);

  const newData = [{}, ...data];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoScrollRef.current) {
        scrollViewRef.current?.scrollTo({
          x: translateXRef.current,
          y: 0,
          animated: true,
        });

        translateXRef.current = isScrollEndRef.current
          ? 0
          : translateXRef.current + ITEM_WIDTH + ITEM_PADDING;
      }
    }, DURATION);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const _onScroll = ({nativeEvent}) => {
    const padding = 20;

    const {contentOffset, layoutMeasurement, contentSize} = nativeEvent;

    const end =
      Math.floor(contentOffset.x + layoutMeasurement.width + padding) >=
      contentSize.width;

    translateXRef.current = contentOffset.x;
    isScrollEndRef.current = end;
  };

  const _onScrollBeginDrag = () => {
    isAutoScrollRef.current = false;
  };

  const _onScrollEndDrag = () => {
    setTimeout(() => {
      isAutoScrollRef.current = true;
    }, DURATION / 2);
  };

  const _renderCategoryProduct = (item, index) => {
    const {picture, title} = item || {};

    return (
      <Pressable
        key={`CategoryProduct-${index}`}
        marginLeft={index !== 0 ? ITEM_PADDING : 0}
        style={{width: ITEM_WIDTH}}>
        <Block
          radius={SIZES.small}
          borderWidth={1}
          borderColor="primary"
          backgroundColor="primary"
          overflow="hidden"
          style={{
            width: ITEM_WIDTH,
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
          ref={scrollViewRef}
          onScroll={_onScroll}
          onScrollBeginDrag={_onScrollBeginDrag}
          onScrollEndDrag={_onScrollEndDrag}
          horizontal
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: hs(SIZES.medium)}}>
          {newData?.map(_renderCategoryProduct)}
        </ScrollView>
      </Block>
    </Block>
  );
};

export default CategoryProduct;
