import {Block, HeaderLogo, ScrollView, ShoppingHolder} from '@components';
import {BANNER_ID, DURATION_REFRESHING} from '@constants';
import actions from '@store/actions';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Banner from './components/Banner';
import BoxAddress from './components/BoxAddress';
import HotProduct from './components/HotProduct';
import OptionGroup from './components/OptionGroup';
import SellProduct from './components/SellProduct';

const callAllApi = dispatch => {
  return Promise.all([
    dispatch({
      type: actions.GET_BANNER_BY_ID_SHOPPING,
      params: {banner_id: BANNER_ID.shopping},
    }),
    dispatch({type: actions.GET_SHOPPING}),
  ]);
};

const Shopping = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const bannerByIdShopping = useSelector(state => state.bannerByIdShopping);
  const shopping = useSelector(state => state.shopping);

  const [bannerHeader = [], bannerMiddle = []] = bannerByIdShopping.data || [];
  const bannerHeaderItem = bannerHeader[0] || {};
  const bannerMiddleItem = bannerMiddle[0] || {};

  const {topsell = [], focus = []} = shopping.data || {};

  useEffect(() => {
    callAllApi(dispatch);
  }, [dispatch]);

  const _onRefreshing = () => {
    setRefreshing(true);
    callAllApi(dispatch).finally(() => {
      setTimeout(() => {
        setRefreshing(false);
      }, DURATION_REFRESHING);
    });
  };

  const _getPlaceHolder = () => {
    const isLoading = bannerByIdShopping.isLoading || shopping.isLoading;

    return !refreshing && isLoading;
  };

  return (
    <Block flex>
      <HeaderLogo />
      <BoxAddress />
      <OptionGroup />
      {_getPlaceHolder() ? (
        <ShoppingHolder />
      ) : (
        <ScrollView refreshing={refreshing} onRefresh={_onRefreshing}>
          <Banner
            thumbnail={bannerHeaderItem?.thumbnail}
            source={bannerHeaderItem?.img_link}
          />
          <Banner
            thumbnail={bannerMiddleItem?.thumbnail}
            source={bannerMiddleItem?.img_link}
          />
          <SellProduct data={topsell} />
          <HotProduct data={focus} />
        </ScrollView>
      )}
    </Block>
  );
};

export default Shopping;
