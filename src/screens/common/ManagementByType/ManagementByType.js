import {ListWrapper} from '@components';
import actions, {_onUnmount} from '@store/actions';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {handleApi, handleFilter} from './common';
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

  const {data, isLoading, totalPage} = handleFilter({
    point: userWCoinLog,
    type,
  });

  useEffect(() => {
    handleApi(dispatch, type, {
      params: {user: tokenUser},
    });

    return () => {
      dispatch({type: _onUnmount(actions.GET_USER_W_COIN_LOG)});
    };
  }, [dispatch, tokenUser, type]);

  return (
    <ManagementWrap
      title={title}
      dateStart={dateStart}
      dateEnd={dateEnd}
      setDateStart={setDateStart}
      setDateEnd={setDateEnd}
      // renderFooter={_renderInfo}
    >
      <ListWrapper
        data={data}
        page={page}
        isLoading={isLoading}
        refreshing={refreshing}
        // onRefresh={_onRefresh}
        // onLoadMore={_loadMore}
        // EmptyComponent={EmptyPoint}
        // HolderComponent={PointHolder}
      >
        <ItemManagement />
      </ListWrapper>
    </ManagementWrap>
  );
};

export default ManagementByType;
