import {
  Block,
  Empty,
  HeaderSearch,
  ItemProduct,
  ListProductHolder,
  ListWrapper,
} from '@components';
import {LOTTIES} from '@constants';
import actions from '@store/actions';
import {SIZES} from '@theme';
import {height} from '@utils/responsive';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Combo = () => {
  const dispatch = useDispatch();

  const {data, totalPage, isLoading} = useSelector(state => state.combo);

  const [refreshing, setRefreshing] = useState(false);

  const [page, setPage] = useState(1);
  const _renderEmpty = () => (
    <Block height={height / 2}>
      <Empty lottie={LOTTIES.search} content="Không có combo mới" />
    </Block>
  );
  useEffect(() => {
    dispatch({
      type: actions.GET_COMBO,
    });
  }, [dispatch]);

  const _onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
    setPage(1);
    dispatch({
      type: actions.GET_COMBO,
      params: {
        p: 1,
      },
    });
  };

  const _loadMore = () => {
    if (page < totalPage) {
      setPage(page + 1);
      dispatch({
        type: actions.GET_COMBO,
        isLoadMore: true,
        params: {
          p: page + 1,
        },
      });
    }
  };

  const _renderItem = ({item}) => <ItemProduct item={item} hasCombo />;

  return (
    <Block flex backgroundColor="background">
      <HeaderSearch canGoBack title="Combo" />
      <Block flex>
        {isLoading ? (
          <ListProductHolder />
        ) : (
          <Block flex padding={SIZES.normal}>
            <ListWrapper
              data={data}
              VSeparator={0}
              numColumns={2}
              onLoadMore={_loadMore}
              refreshing={refreshing}
              onRefresh={_onRefresh}
              renderItem={_renderItem}
              EmptyComponent={_renderEmpty}
              isLoading={isLoading}
              page={page}
            />
          </Block>
        )}
      </Block>
    </Block>
  );
};

export default Combo;
