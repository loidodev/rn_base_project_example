import {ListWrapper} from '@components';
import {DURATION_REFRESHING} from '@constants';
import actions, {_onUnmount} from '@store/actions';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {formatDate, handleApi, handleFilter} from './common';
import EmptyManagement from './components/EmptyManagement';
import Footer from './components/Footer';
import HolderManagement from './components/HolderManagement';
import ItemManagement from './components/ItemManagement';
import ManagementWrap from './components/ManagementWrap';

const ManagementByType = ({route}) => {
  const {title, type} = route.params || {};

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const tokenUser = useSelector(state => state.tokenUser);
  const userWCoinLog = useSelector(state => state.userWCoinLog);
  const swapCommissionLog = useSelector(state => state.swapCommissionLog);
  const commission = useSelector(state => state.commission);

  const {data, isLoading, totalPage} = handleFilter({
    point: userWCoinLog,
    historyPoint: swapCommissionLog,
    rose: commission,
    type,
  });

  useEffect(() => {
    handleApi(dispatch, type, {
      params: {
        user: tokenUser,
        search_date_begin: formatDate(dateStart),
        search_date_end: formatDate(dateEnd),
      },
    });

    return () => {
      dispatch({type: _onUnmount(actions.GET_USER_W_COIN_LOG)});
      dispatch({type: _onUnmount(actions.SWAP_COMMISSION_LOG)});
      dispatch({type: _onUnmount(actions.GET_COMMISSION)});
    };
  }, [dateEnd, dateStart, dispatch, tokenUser, type]);

  const _onRefreshing = () => {
    setPage(1);
    setRefreshing(true);
    handleApi(dispatch, type, {
      params: {
        user: tokenUser,
        search_date_begin: formatDate(dateStart),
        search_date_end: formatDate(dateEnd),
      },
    }).finally(() => {
      setTimeout(() => {
        setRefreshing(false);
      }, DURATION_REFRESHING);
    });
  };

  const _onLoadMore = () => {
    if (page < totalPage) {
      setPage(page + 1);
      handleApi(dispatch, type, {
        isLoadMore: true,
        params: {
          user: tokenUser,
          search_date_begin: formatDate(dateStart),
          search_date_end: formatDate(dateEnd),
          p: page + 1,
        },
      });
    }
  };

  return (
    <ManagementWrap
      title={title}
      dateStart={dateStart}
      dateEnd={dateEnd}
      setDateStart={setDateStart}
      setDateEnd={setDateEnd}
      renderFooter={() => <Footer type={type} data={data?.info} />}>
      <ListWrapper
        data={data}
        page={page}
        isLoading={isLoading}
        refreshing={refreshing}
        onRefresh={_onRefreshing}
        onLoadMore={_onLoadMore}
        EmptyComponent={() => <EmptyManagement type={type} />}
        HolderComponent={HolderManagement}>
        <ItemManagement />
      </ListWrapper>
    </ManagementWrap>
  );
};

export default ManagementByType;
