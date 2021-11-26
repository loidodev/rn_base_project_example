import {ListWrapper} from '@components';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import ItemManagement from './components/ItemManagement';
import ManagementWrap from './components/ManagementWrap';

const ManagementByType = ({route}) => {
  const {title} = route.params || {};

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  useEffect(() => {}, []);

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
        // data={data}
        page={page}
        // isLoading={isLoading}
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
