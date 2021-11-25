import {Block, HeaderTitle, ItemProduct, ListWrapper} from '@components';
import {DURATION_REFRESHING} from '@constants';
import actions, {_onUnmount} from '@store/actions';
import {SIZES} from '@theme';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {handleApi, handleFilter} from './common';
import EmptyProductByType from './components/EmptyProductByType';
import HolderProductByType from './components/HolderProductByType';

const ProductByType = ({route}) => {
  const {title, type} = route.params || {};

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [refreshing, setFreshing] = useState(false);
  const tokenUser = useSelector(state => state.tokenUser);
  const productViewed = useSelector(state => state.productViewed);
  const productByLate = useSelector(state => state.productByLate);

  const {data, isLoading, totalPage} = handleFilter({
    viewed: productViewed,
    byLate: productByLate,
    type,
  });

  useEffect(() => {
    handleApi(dispatch, type, {
      params: {user: tokenUser},
    });

    return () => {
      dispatch({type: _onUnmount(actions.GET_PRODUCT_VIEWED)});
      dispatch({type: _onUnmount(actions.GET_PRODUCT_BY_LATE)});
    };
  }, [dispatch, tokenUser, type]);

  const _onRefreshing = () => {
    setPage(1);
    setFreshing(true);
    handleApi(dispatch, type, {
      params: {user: tokenUser},
    }).finally(() => {
      setTimeout(() => {
        setFreshing(false);
      }, DURATION_REFRESHING);
    });
  };

  const _onLoadMore = () => {
    if (page < totalPage) {
      setPage(page + 1);
      handleApi(dispatch, type, {
        isLoadMore: true,
        params: {user: tokenUser, p: page + 1},
      });
    }
  };

  return (
    <Block flex backgroundColor="background">
      <HeaderTitle title={title} canGoBack />
      <ListWrapper
        data={data}
        page={page}
        isLoading={isLoading}
        refreshing={refreshing}
        onRefresh={_onRefreshing}
        onLoadMore={_onLoadMore}
        HolderComponent={HolderProductByType}
        EmptyComponent={EmptyProductByType}
        numColumns={2}
        VSeparator={0}
        containerProps={{padding: SIZES.normal}}>
        <ItemProduct />
      </ListWrapper>
    </Block>
  );
};

export default ProductByType;
