import {Block, HeaderSearch, Text, WebView} from '@components';
import React from 'react';

const InformationDetails = ({route}) => {
  const data = route.params.params;

  return (
    <Block flex backgroundColor="white">
      <HeaderSearch title="Thông tin chi tiết" canGoBack />
      <Block flex padding={12} paddingBottom={20}>
        <WebView data={data} />
      </Block>
    </Block>
  );
};

export default InformationDetails;
