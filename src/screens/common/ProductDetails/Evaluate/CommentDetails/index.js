import {Block, EvaluateHolder, Header, ListWrapper} from '@components';
import locale from 'locale';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Comment from '../components/Comment';
import HeaderCommen from '../components/HeaderCommen';
import actions from '@store/actions';

const callAllApi = (dispatch, route) => {
  return Promise.all([
    dispatch({
      type: actions.GET_REVIEWS_PRODUCT,
      params: {
        item_id: route.params.item_id,
        p: 1,
      },
    }),
  ]);
};

const CommentDetails = ({route}) => {
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails.data);
  const [page, setPage] = useState(1);
  const {data, totalPage, isLoading} = useSelector(state => state.review);
  const [refreshing, setRefreshing] = useState(false);
  const rCombo = useSelector(state => state.comboProductDetails.data);
  const dataDetails = route.params.hasCombo ? rCombo : productDetails;

  useEffect(() => {
    setPage(1);
  }, []);

  const _onRefresh = () => {
    setRefreshing(true);
    callAllApi(dispatch, route).finally(() => {
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    });
  };

  const _loadMore = () => {
    if (page < totalPage) {
      setPage(page + 1);
      dispatch({
        type: actions.GET_REVIEWS_PRODUCT,
        isLoadMore: true,
        params: {
          item_id: route.params.item_id,
          p: page + 1,
        },
      });
    }
  };

  const _renderItem = ({item}) => <Comment item={item} />;
  const _renderHeader = ({item}) => <HeaderCommen data={dataDetails} route />;

  return (
    <Block flex backgroundColor="white">
      <Header title={locale.t('evaluate.reviews')} canGoBack />
      {isLoading && <EvaluateHolder />}
      {!isLoading && !data?.length ? null : (
        <ListWrapper
          data={data}
          VSeparator={0}
          numColumns={2}
          onLoadMore={_loadMore}
          refreshing={refreshing}
          onRefresh={_onRefresh}
          renderItem={_renderItem}
          ListHeaderComponent={_renderHeader}
          isLoading={isLoading}
          page={page}
        />
      )}
    </Block>
  );
};

export default CommentDetails;
