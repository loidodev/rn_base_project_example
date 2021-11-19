import {Block} from '@components';
import {ProductDetailsHolder} from '@components/Common/PlaceHolder';
import actions, {_onUnmount} from '@redux/actions';
import {getSize, height} from '@utils/responsive';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ChooseBonus from './components//ChooseBonus';
import AnimatedCart from './components/AnimatedCart';
import AnimatedHeart from './components/AnimatedHeart';
import ChooseTypeProduct from './components/ChooseTypeProduct';
import ComboProduct from './components/ComboProduct';
import EvaluateProduct from './components/EvaluateProrduct';
import HeaderIcon from './components/HeaderIcon';
import ImageHeader from './components/ImageHeader';
import InfoProduct from './components/InfoProduct';
import InformationProduct from './components/InformationProduct';
import RelatedProduct from './components/RelatedProduct';
import VoucherProduct from './components/VoucherProduct';
import styles from './styles';

const MAX_HEIGHT = height - getSize.m(180);

const ProductDetails = ({route}) => {
  
    return (
      <Block flex>
        <HeaderIcon
          scrollY={scrollY}
          title={data?.title}
          item_id={item_id}
          onSetAnimated={_onAnimatedHeart}
          setIsHeart={setIsHeart}
        />
        {/* <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: false},
          )}>
          <ImageHeader data={data?.arr_picture} />
          <InfoProduct data={data} />
          <VoucherProduct vouchers={data?.promotion_code} />
          {hasCombo && data?.combo && (
            <ChooseBonus
              data={data?.combo}
              productBonus={productBonus}
              setProductBonus={setProductBonus}
              containerStyles={styles.gifContainer}
            />
          )}
          {hasCombo && <ComboProduct data={data} />}
          <InformationProduct content={data?.content} isShowMore={!hasCombo} />
          <EvaluateProduct
            isShowAll
            hasCombo={hasCombo}
            data={review?.slice(0, 4)}
            item_id={item_id}
          />
          <RelatedProduct data={data?.arr_related} />
        </Animated.ScrollView>
        <ChooseTypeProduct
          productBonus={productBonus}
          hasCombo={hasCombo}
          isComBoGift={data?.combo?.arr_gift?.length > 0}
          onSetAnimated={_onAnimatedCart}
        />
        <AnimatedCart
          source={data?.arr_picture?.[0]}
          animatedValue={animatedCart}
        />
        <AnimatedHeart isHeart={isHeart} setIsHeart={setIsHeart} /> */}
      </Block>
    );
  };

  return (
    <Block flex backgroundColor="background">
      <StatusBar translucent barStyle="dark-content" />
      {_renderContent()}
    </Block>
  );
};

export default ProductDetails;
