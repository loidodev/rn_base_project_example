import {Block, HeaderSearch, Text, WebView} from '@components';
import actions from '@store/actions';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Birthday = () => {
  const dispatch = useDispatch();
  const birthday = useSelector(state => state.birthday.data);
  const {data, totalPage, isLoading} = useSelector(state => state.search);
  useEffect(() => {
    dispatch({type: actions.GET_BIRTHDAY});
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: actions.GET_SEARCH_SCREEN,
      params: {
        keyword: '',
      },
    });
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

export default Birthday;
