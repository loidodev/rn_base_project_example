import {Block, HeaderSearch, WebView} from '@components';
import actions from '@store/actions';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Partner = value => {
  const dispatch = useDispatch();
  const partner = useSelector(state => state.partner.data);

  useEffect(() => {
    dispatch({type: actions.GET_PARTNER});
  }, [dispatch]);

  return (
    <Block flex>
      <HeaderSearch canGoBack title={partner?.title} />
      <Block flex padding={12} paddingBottom={20}>
        <WebView data={partner?.content} />
      </Block>
    </Block>
  );
};

export default Partner;
