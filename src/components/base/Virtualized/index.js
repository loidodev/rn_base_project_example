import React from 'react';
import {FlatList} from 'react-native';

const Virtualized = ({refreshing = false, onRefresh, onLoadMore, children}) => {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      ListHeaderComponent={() => <React.Fragment>{children}</React.Fragment>}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReachedThreshold={0.5}
      onEndReached={onLoadMore}
    />
  );
};

export default Virtualized;
