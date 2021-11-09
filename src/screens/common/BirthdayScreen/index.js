import {Block, HeaderSearch, WebView} from '@components';
import React from 'react';

const BirthdayScreen = value => {
  const {title} = value.route.params.params;

  return (
    <Block flex>
      <HeaderSearch canGoBack title={title} />
      <Block flex padding={12} paddingBottom={20}>
        <WebView data={'https://topshare.vn/hinh-anh-buon-co-don-dep/'} />
      </Block>
    </Block>
  );
};

export default BirthdayScreen;
