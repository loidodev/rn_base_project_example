import React from 'react';
import {RefreshControl, ScrollView as RNScrollView} from 'react-native';

const ScrollView = ({
  refreshing = false,
  onRefresh,
  contentContainerStyle,
  ...rest
}) => {
  return (
    <RNScrollView
      {...rest}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
      contentContainerStyle={contentContainerStyle}
    />
  );
};

export default ScrollView;
