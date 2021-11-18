/* eslint-disable react-native/no-inline-styles */
import {Block} from '@components';
import {COLORS} from '@theme';
import React, {cloneElement} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

const ListWrapper = ({
  data = [],
  page = 1,
  isLoading = false,
  refreshing = false,
  horizontal = false,
  HSeparator = 6,
  VSeparator = 6,
  onRefresh = () => {},
  onLoadMore = () => {},
  EmptyComponent,
  HolderComponent,
  renderItem,
  keyExtractor,
  style,
  children,
  numColumns = 1,
  ...rest
}) => {
  if (isLoading && !data) {
    return HolderComponent && <HolderComponent />;
  }

  const _keyExtractor = (item, index) => {
    return keyExtractor ? keyExtractor(item, index) : String(index);
  };

  const _renderItem = ({item, index}) => {
    return renderItem
      ? renderItem({item, index})
      : cloneElement(children, {item, index});
  };

  const _renderEmpty = () => {
    return EmptyComponent && <EmptyComponent />;
  };

  const _renderSeparator = () => {
    return horizontal ? (
      <Block width={HSeparator} />
    ) : (
      <Block height={VSeparator} />
    );
  };

  const _renderLoadMore = () => {
    return (
      <Block marginVertical={12}>
        <ActivityIndicator size="small" color={COLORS.black} />
      </Block>
    );
  };

  return (
    <Block style={style} flex>
      <FlatList
        {...rest}
        contentContainerStyle={{flexGrow: 1}}
        horizontal={horizontal}
        data={data}
        numColumns={numColumns}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        ListEmptyComponent={_renderEmpty}
        ItemSeparatorComponent={_renderSeparator}
        onRefresh={onRefresh}
        refreshing={refreshing}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      {isLoading && page > 1 && _renderLoadMore()}
    </Block>
  );
};

export default ListWrapper;
