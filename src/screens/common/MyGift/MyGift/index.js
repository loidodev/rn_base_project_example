import {Block, HeaderTitle, ListWrapper} from '@components';
import {SIZES} from '@theme';
import React, {useState} from 'react';
import EmptyGift from './components/EmptyGift';
import HolderGift from './components/HolderGift';
import ItemGift from './components/ItemGift';

const MyGift = ({route}) => {
  const {title} = route.params || {};

  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const _onRefreshing = () => {};

  const _onLoadMore = () => {};

  return (
    <Block flex backgroundColor="background">
      <HeaderTitle title={title} canGoBack />
      <ListWrapper
        // data={data}
        page={page}
        // isLoading={isLoading}
        refreshing={refreshing}
        onRefresh={_onRefreshing}
        onLoadMore={_onLoadMore}
        HolderComponent={HolderGift}
        EmptyComponent={EmptyGift}
        containerProps={{padding: SIZES.normal}}>
        <ItemGift />
      </ListWrapper>
    </Block>
  );
};

export default MyGift;
