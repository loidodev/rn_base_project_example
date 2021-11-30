import {Block, HeaderTitle, ListWrapper} from '@components';
import {DURATION_REFRESHING} from '@constants';
import {SIZES} from '@theme';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {handleApi} from './common';
import EmptyGift from './components/EmptyGift';
import HolderGift from './components/HolderGift';
import ItemGift from './components/ItemGift';

const MyGift = ({route}) => {
  const {title} = route.params || {};

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const tokenUser = useSelector(state => state.tokenUser);
  const userGift = useSelector(state => state.userGift);

  useEffect(() => {
    handleApi(dispatch, {
      params: {user: tokenUser},
    });
  }, [dispatch, tokenUser]);

  const _onRefreshing = () => {
    setPage(1);
    setRefreshing(true);
    handleApi(dispatch, {
      params: {user: tokenUser},
    }).finally(() => {
      setTimeout(() => {
        setRefreshing(false);
      }, DURATION_REFRESHING);
    });
  };

  const _onLoadMore = () => {
    if (page < userGift.totalPage) {
      setPage(page + 1);
      handleApi(dispatch, {
        isLoadMore: true,
        params: {user: tokenUser, p: page + 1},
      });
    }
  };

  return (
    <Block flex backgroundColor="background">
      <HeaderTitle title={title} canGoBack />
      <ListWrapper
        data={userGift.data}
        page={page}
        isLoading={userGift.isLoading}
        refreshing={refreshing}
        onRefresh={_onRefreshing}
        onLoadMore={_onLoadMore}
        HolderComponent={HolderGift}
        EmptyComponent={EmptyGift}
        VSeparator={0}
        containerProps={{padding: SIZES.normal}}>
        <ItemGift />
      </ListWrapper>
    </Block>
  );
};

export default MyGift;
