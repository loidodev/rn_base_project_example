/* eslint-disable react-native/no-inline-styles */
import {
  Block,
  HeaderLogo,
  HomeHolder,
  LazyImage,
  ScrollView,
} from '@components';
import {BANNER_ID} from '@constants';
import actions from '@store/actions';
import {SIZES} from '@theme';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import BannerHome from './components/BannerHome';
import CategoryGroup from './components/CategoryGroup';
import CategoryProduct from './components/CategoryProduct';
import HotProduct from './components/HotProduct';

const callAllApi = (dispatch, user) => {
  return Promise.all([
    dispatch({
      type: actions.GET_BANNER_BY_ID_HOME,
      params: {banner_id: BANNER_ID.home},
    }),
    dispatch({type: actions.GET_PRODUCT_GROUP_HOME}),
    dispatch({
      type: actions.GET_PRODUCT_IS_FOCUS,
      params: {
        type: 'is_focus',
      },
    }),
  ]);
};

const Home = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const token = useSelector(state => state.token);
  const bannerByIdHome = useSelector(state => state.bannerByIdHome);
  const productGroup = useSelector(state => state.productGroup);
  const productIsFocus = useSelector(state => state.productIsFocus);

  const user = useSelector(state => state.tokenUser);

  const [bannerHeader = [], bannerMiddle = []] = bannerByIdHome.data || [];
  const bannerMiddleItem = bannerMiddle[0] || {};

  useEffect(() => {
    callAllApi(dispatch, user);
  }, [dispatch, token, user]);

  const _onRefreshing = () => {
    setRefreshing(true);
    callAllApi(dispatch).finally(() => {
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    });
  };

  const _getPlaceHolder = () => {
    const isLoading =
      bannerByIdHome.isLoading ||
      productGroup.isLoading ||
      productIsFocus.isLoading;

    return !refreshing && isLoading;
  };

  return (
    <Block flex>
      <HeaderLogo />
      {_getPlaceHolder() ? (
        <HomeHolder />
      ) : (
        <ScrollView refreshing={refreshing} onRefresh={_onRefreshing}>
          <BannerHome data={bannerHeader} />
          <CategoryGroup />
          {productGroup.data && <CategoryProduct data={productGroup.data} />}
          <Block marginTop={SIZES.medium} height={100}>
            <LazyImage
              styles={{width: '100%', height: '100%'}}
              source={bannerMiddleItem?.img_link}
              thumbnail={bannerMiddleItem?.thumbnail}
            />
          </Block>
          {productIsFocus.data && (
            <HotProduct data={productIsFocus.data} user={user} />
          )}
        </ScrollView>
      )}
    </Block>
  );
};

export default Home;
