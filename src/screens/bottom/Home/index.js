/* eslint-disable react-native/no-inline-styles */
import {Block, HeaderLogo, LazyImage, ScrollView} from '@components';
import {BANNER_ID} from '@constants';
import actions from '@store/actions';
import {SIZES} from '@theme';
import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import BannerHome from './components/BannerHome';
import CategoryGroup from './components/CategoryGroup';
import CategoryProduct from './components/CategoryProduct';
import HotProduct from './components/HotProduct';

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const bannerById = useSelector(state => state.bannerById);

  const [bannerHeader = [], bannerMiddle = []] = bannerById.data || [];
  const bannerMiddleItem = bannerMiddle[0] || {};

  useEffect(() => {
    if (token.data) {
      dispatch({
        type: actions.GET_BANNER_BY_ID,
        params: {banner_id: BANNER_ID.home},
      });
    }
  }, [dispatch, token]);

  return (
    <Block flex>
      <HeaderLogo />
      <ScrollView>
        <BannerHome data={bannerHeader} />
        <CategoryGroup />
        <CategoryProduct />
        <Block marginTop={SIZES.medium} height={100}>
          <LazyImage
            styles={{width: '100%', height: '100%'}}
            source={bannerMiddleItem?.img_link}
            thumbnail={bannerMiddleItem?.thumbnail}
          />
        </Block>
        <HotProduct />
      </ScrollView>
    </Block>
  );
};

export default Home;
