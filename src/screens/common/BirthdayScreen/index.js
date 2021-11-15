import {Block, HeaderSearch, WebView} from '@components';
import actions from '@store/actions';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const BirthdayScreen = value => {
  const dispatch = useDispatch();
  const birthday = useSelector(state => state.birthday.data);

  useEffect(() => {
    dispatch({type: actions.GET_BIRTHDAY});
  }, [dispatch]);

  return (
    <Block flex>
      <HeaderSearch canGoBack title={birthday?.title} />
      <Block flex padding={12} paddingBottom={20}>
        <WebView data={birthday?.content} />
      </Block>
    </Block>
  );
};

export default BirthdayScreen;
